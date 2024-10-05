"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { AiFillAlipayCircle } from "react-icons/ai";
import { AiFillCodepenCircle } from "react-icons/ai";
import { IconType } from "react-icons";

interface Language {
  icon: React.ReactElement<IconType>;
  langCode: string;
  languageLabel: string;
}

const languageList: Language[] = [
  { icon: <AiFillCodepenCircle />, langCode: "en", languageLabel: "English" },
  { icon: <AiFillAlipayCircle />, langCode: "de", languageLabel: "German" },
];

export function LanguageToggle() {
  const [selectedLanguage, setSelectedLanguage] = React.useState(
    languageList[0]
  );

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {selectedLanguage.icon}
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* Populate Dropdown Menu from languageList */}
        {languageList.map((language) => (
          <DropdownMenuItem
            key={language.langCode}
            onClick={() => handleLanguageChange(language)}
          >
            {language.icon} {language.languageLabel}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
