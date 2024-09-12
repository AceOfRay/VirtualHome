"use client";
import React, { useState } from "react";
import styles from "./modal.module.css";

export default function Modal<T extends React.ReactNode>({
  children,
  text,
}: {
  children: T;
  text: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <button className={styles.text} onClick={handleOpen}>
        {text}
      </button>
      <div>
        {isVisible && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
                          <div className={styles.buttonContainer}>
                <button className={styles.closeButton} onClick={handleClose}>
                  &times;
                </button>
              </div>

              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
