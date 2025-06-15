import {FormLabel, Stack} from "@mui/joy";
import {getTrans, type Translation} from "~src/lang";
import {useState} from "react";

export default function RequiredFormLabel({label, trans}: {label: string, trans?: Translation}) {
    const [lang, _setLang] = useState<Translation>(trans ?? getTrans());

    return (
        <Stack direction="row" justifyContent="space-between" alignItems="baseline">
            <FormLabel>{label}</FormLabel>
            <FormLabel sx={{fontSize: "xs"}}>{lang.Required}</FormLabel>
        </Stack>
    );
}
