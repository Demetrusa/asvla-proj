// DonationPopup.tsx
import React from "react";

interface DonationPopupProps {
  isVisible: boolean;
  onClose: () => void;
  donationAmount: number;
  onAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirm: () => void;
  onPresetAmountClick: (amount: number) => void;
}

const DonationPopup: React.FC<DonationPopupProps> = ({
  isVisible,
  onClose,
  donationAmount,
  onAmountChange,
  onConfirm,
  onPresetAmountClick,
}) => {
  if (!isVisible) return null;

  return (
    <div className="donation-popup">
      <div className="donation-popup-content">
        <h3>Donate Amount</h3>
        <input
          type="number"
          value={donationAmount}
          onChange={onAmountChange}
          placeholder="Enter amount"
        />
        <button onClick={onConfirm}>Confirm</button>
        <div className="preset-amounts">
          <button onClick={() => onPresetAmountClick(10000)}>10k</button>
          <button onClick={() => onPresetAmountClick(20000)}>20k</button>
          <button onClick={() => onPresetAmountClick(50000)}>50k</button>
          <button onClick={() => onPresetAmountClick(100000)}>100k</button>
        </div>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default DonationPopup;
