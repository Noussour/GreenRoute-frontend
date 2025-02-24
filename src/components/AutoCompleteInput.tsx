"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { getPlaceSuggestions } from "@/lib/ors-api";

interface AutocompleteInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export function AutocompleteInput({
  placeholder,
  value,
  onChange,
}: AutocompleteInputProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (value.length > 2) {
        const placeSuggestions = await getPlaceSuggestions(value);
        setSuggestions(
          placeSuggestions.map(
            (place) =>
              `${place.name}${place.county ? `, ${place.county}` : ""}${place.region ? `, ${place.region}` : ""}, ${place.country}`,
          ),
        );
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={inputRef}>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setShowSuggestions(true);
        }}
        onFocus={() => setShowSuggestions(true)}
        className="text-sm"
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-background border border-input rounded-md mt-1 max-h-60 overflow-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-3 py-2 hover:bg-accent hover:text-accent-foreground cursor-pointer text-sm"
              onClick={() => {
                onChange(suggestion);
                setShowSuggestions(false);
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
