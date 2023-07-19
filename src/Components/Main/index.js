import React from "react";
import logo from "../../assets/investment-calculator-logo.png";
import CalculationForm from "../CalculationForm";
import ResultsTable from "../ResultsTable";
import "./style.css";

export default function Main() {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <CalculationForm />
      <ResultsTable />
    </div>
  );
}
