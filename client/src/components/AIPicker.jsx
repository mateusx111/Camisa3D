import React from "react";

import { CustomButton } from "./CustomButton";

export const AIPicker = ({
  prompt,
  setPrompt,
  generatingImg,
  handleSubmit,
}) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Pergunte para a AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Perguntando para a IA..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />

            <CustomButton
              type="filled"
              title="AI Completo"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};
