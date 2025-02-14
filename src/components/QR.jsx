import React, {useState} from "react";
import QRCode from "react-qr-code";

export default function QR(props) {
    return (
        <div style={{ height: "auto", margin: "0 auto", maxWidth: 256, width: "100%" }}>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "500px" }}
          value={props.url}
          viewBox={`0 0 256 256`}
          fgColor={props.fgColor}
          bgColor={props.bgColor}
        />
      </div>
    )
}