import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  header: {
	fontSize: "14px",
	marginBottom: "20px"
  },
  section: {
    padding: "5px",
	fontSize: "10px"
  },
});

const PDFItemList = ({ items, holiday }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
		  <Text style={styles.header}>Spisak za: <b>{holiday}</b></Text>
        {items.map((item) => (
          <View style={styles.section}>
            <Text>
              {item.name} ---- {item.amount}
              {item.measurement}
            </Text>
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default PDFItemList;
