import React, { useState } from "react";
import { CFormInput, CButton, CContainer, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./App.css";
import { getBalance } from "./helpers/getBalance";

function App() {
  const [isAnimation, setIsAnimation] = useState<boolean>(false);
  const [balance, setBalance] = useState<number | null>(null);
  const [userKey, setUserKey] = useState<string>("");
  let classes = isAnimation
    ? "app__logo-animated"
    : "app__logo-animation--none";

  return (
    <div className="app">
      <CContainer className="app__content">
        <div className="text-center">
          <CImage
            rounded
            className={classes}
            src="https://cryptologos.cc/logos/solana-sol-logo.png"
            width={100}
            height={100}
          />
        </div>
        <CFormInput
          type="email"
          className="app__content-input"
          value={userKey}
          onChange={(e) => setUserKey(e.target.value)}
          id="exampleFormControlInput1"
          placeholder="Inset Solana address..."
          aria-describedby="exampleFormControlInputHelpInline"
        />
        <CButton
          color="dark"
          variant="outline"
          className="app__content-button"
          onClick={() => {
            setIsAnimation(true);
            getBalance(userKey, setBalance);
          }}
        >
          Check balance
        </CButton>
        <span
          className={
            isAnimation ? "app__content-balance" : "app__content-balance--none"
          }
        >
          Balance: {balance} SOL
        </span>
      </CContainer>
    </div>
  );
}

export default App;
