import React, { useEffect, useState } from "react";
import { fetchData, patchData } from "../helpers";
import Meal from "./Meal";
import layoutStyles from "./Layout.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint, faCheck } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFItemList from "./PDFItemList";

const Layout = () => {
  const [holidays, setHolidays] = useState();
  const [meals, setMeals] = useState();
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [fontColor, setFontColor] = useState("#00000");
  const [isOpened, setIsOpened] = useState(false);
  const [visibility, setVisibility] = useState({
    visibility: "hidden",
    left: -210,
  });
  const [activeMeal, setActiveMeal] = useState(null);
  const [activeHoliday, setActiveHoliday] = useState(null);
  const [editing, setEditing] = useState(false);
  const [mealName, setMealName] = useState(null);
  const [pdfItems, setPdfItems] = useState([]);
  const[holidayName, setHolidayName] = useState('');

  const handleGetHolidays = async () => {
    const newHolidays = await fetchData("/praznici");
    setHolidays(newHolidays);
    setActiveHoliday(newHolidays[0]._id);
  };

  const handleGetSingleHoliday = async () => {
    if (!activeHoliday) return;
    const newHoliday = await fetchData(`/praznici/${activeHoliday}`);
    setHolidayName(newHoliday.name)
    setMeals(newHoliday.meals);
    const tempData = [];
    newHoliday.meals.map((meal) =>
      meal.items.map((item) => tempData.push(item))
    );
    setPdfItems(tempData);
    setActiveMeal(newHoliday.meals[0].name);
    changeBackgroundColor(null, newHoliday.backgroundColor);
    changeFontColor(null, newHoliday.fontColor);
  };

  const handleActiveMeal = (mealName) => {
    if (activeMeal === mealName) {
      setActiveMeal(null);
      return;
    }
    setActiveMeal(mealName);
  };

  const handleIsOpened = () => {
    if (isOpened) {
      setIsOpened(false);
      setVisibility({ visibility: "hidden", left: -210 });
    } else {
      setIsOpened(true);
      setVisibility({ visibility: "visible", left: 0 });
    }
  };

  const handleAddNewItem = () => {
    if (!mealName) {
      setEditing(false);
      return;
    }

    const newMeal = {
      name: mealName,
      items: [],
    };
    handleUpdateMeals(null, null, newMeal);
    setEditing(false);
    setMealName(null);
  };

  const handleSubmitData = async () => {
    const res = await patchData(`/praznici/${activeHoliday}`, {
      meals: meals,
      backgroundColor: backgroundColor,
      fontColor: fontColor,
    });
    res === "OK"
      ? toast.success("Uspešno ažurirano!")
      : toast.error("Greška pri ažuriranju");
    //TODO: Implement PDF functionality
  };

  const changeBackgroundColor = (e, value = null) => {
    document.documentElement.style.setProperty(
      "--background-color",
      value || e.target.value
    );
    setBackgroundColor(value || e.target.value);
  };

  const handleUpdateMeals = (updatedMeal, mealName, newMeal = null) => {
    const newMeals = [...meals];
    if (newMeal) {
      let exists = false;
      newMeals.map((item) =>
        item.name === newMeal.name ? (exists = true) : ""
      );
      if (exists) {
        toast.error("Proizvod je već u listi");
        return;
      }
      setPdfItems([...pdfItems, newMeal]);
    }
    newMeals.map((meal) =>
      meal.name === mealName ? (meal.items = updatedMeal) : ""
    );
    setMeals(newMeals);
  };

  const changeFontColor = (e, value = null) => {
    document.documentElement.style.setProperty(
      "--font-color",
      value || e.target.value
    );
    setFontColor(value || e.target.value);
  };

  const handleIgnoreItem = (itemName = null) => {
    if (!pdfItems) {
      return;
    }
    const newItems = pdfItems.filter((item) => item.name !== itemName);
    setPdfItems(newItems);
  };

  useEffect(() => {
    handleGetHolidays();
  }, []);

  useEffect(() => {
    handleGetSingleHoliday();
  }, [activeHoliday]);

  if (!holidays) {
    return <span>Loading...</span>;
  }
  return (
    <div className={layoutStyles.wrapper}>
      <div
        className={layoutStyles.colorPickerActivator}
        style={{ left: isOpened ? 205 : 0 }}
        onClick={handleIsOpened}
      >
        <FontAwesomeIcon icon={faTint} />
      </div>
      <div className={layoutStyles.colorPicker} style={visibility}>
        <h1>Izaberi boje</h1>
        <div className={layoutStyles.colorContainer}>
          <input
            type="color"
            value={backgroundColor}
            onChange={changeBackgroundColor}
            id="backgroundColor"
          />
          <label htmlFor="backgroundColor">Boja pozadine</label>
        </div>
        <div className={layoutStyles.colorContainer}>
          <input
            type="color"
            value={fontColor}
            onChange={changeFontColor}
            id="fontColor"
          />
          <label htmlFor="fontColor">Boja teksta</label>
        </div>
      </div>
      <h1>Izaberi praznik</h1>
      <select
        className={layoutStyles.holidaySelect}
        onChange={(e) => setActiveHoliday(holidays[e.target.selectedIndex]._id)}
      >
        {holidays.map((holiday) => (
          <option key={holiday._id} id={holiday._id}>
            {holiday.name}
          </option>
        ))}
      </select>
      <div>
        {meals &&
          meals.map((meal) => (
            <Meal
              meal={meal}
              activeMeal={activeMeal}
              activeMealHandler={handleActiveMeal}
              key={meal._id}
              handleUpdateMeals={handleUpdateMeals}
              handleIgnoreItem={handleIgnoreItem}
            />
          ))}
        <hr />
        {!editing ? (
          <h3 className={layoutStyles.addMeal} onClick={() => setEditing(true)}>
            Dodaj obrok
          </h3>
        ) : (
          <div className={layoutStyles.editingMeal}>
            <h4>Unesi obrok</h4>
            <div className={layoutStyles.inputSection}>
              <input
                type="text"
                onChange={(e) => setMealName(e.target.value)}
                placeholder="Ime proizvoda"
                className={layoutStyles.regularInput}
              />
              <FontAwesomeIcon icon={faCheck} onClick={handleAddNewItem} />
            </div>
          </div>
        )}
      </div>
      <div className={layoutStyles.button}>
        <button onClick={handleSubmitData}>Ažuriraj</button>
        <PDFDownloadLink document={<PDFItemList items={pdfItems} holiday={holidayName}/>} fileName={`spisak`}>
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Preuzmi"
          }
        </PDFDownloadLink>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        theme="colored"
      />
      <div></div>
    </div>
  );
};

export default Layout;
