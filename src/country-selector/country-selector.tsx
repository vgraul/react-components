import React, { useEffect, useState } from "react";
import { capitalize } from "@vincentgraul/utils/word";
import styles from "./country-selector.module.css";
import { CountrySelectorOption } from "./country-selector.types";
import { Select } from "..";
import * as Icons from "./icons";

type Props = {
  languages: string[];
  value?: string;
  onChange?: (option: CountrySelectorOption) => void;
  flagWidth?: string;
};

export const CountrySelector = (props: Props) => {
  const { value, languages, onChange, flagWidth = "30px" } = props;
  const [options, setOptions] = useState<CountrySelectorOption[]>(null);

  useEffect(() => {
    const prepareOptions = async () => {
      setOptions(
        await Promise.all(
          languages.map(async (language: string) => {
            const Flag = Icons[capitalize(language)];
            return {
              value: language,
              label: <Flag className={styles.flag} style={{ width: flagWidth }} />,
            };
          }),
        ),
      );
    };

    prepareOptions();
  }, [languages]);

  if (!options) {
    return null;
  }

  return <Select selectedValue={value} options={options} onChange={onChange}></Select>;
};
