import React, { useState, useRef } from 'react';
import { Mic } from "lucide-react";

const AudioRecorder = ({ onStopRecording }) => {
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);

  const startRecording = () => {
    recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = false;

    recognitionRef.current.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
        console.log("it stopped")
        onStopRecording(transcript);
    };

    recognitionRef.current.onerror = (event) => {
      console.error('Error during speech recognition:', event.error);
    };

    recognitionRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsRecording(false);
  };

  return (
    <button 
      size="icon" 
      variant="secondary" 
      onClick={isRecording ? stopRecording : startRecording}
    >
      <div className="p-2">
        <Mic className="h-5 w-5" color={isRecording ? "#ff0000" : "#171924"} />
      </div>
    </button>
  );
};

export default AudioRecorder;