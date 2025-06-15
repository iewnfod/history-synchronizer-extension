import {
    Button, FormControl, FormLabel,
    Input, Link,
    Stack,
} from "@mui/joy";
import DnsIcon from '@mui/icons-material/Dns';
import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';
import {useState} from "react";
import {getTrans, type Translation} from "~src/lang";
import RequiredFormLabel from "~src/RequiredFormLabel";

const DEFAULT_SERVER = "https://history-sync.muyunxi.top/";

function IndexPopup() {
    const [serverHost, setServerHost] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [lang, _setLang] = useState<Translation>(getTrans());

    return (
        <Stack sx={{m: 3, mt: 4, mb: 4}} gap={1.5} justifyContent="center" alignItems="center">
            <FormControl>
                <FormLabel>{lang.ServerAddress}</FormLabel>
                <Input
                    startDecorator={<DnsIcon/>}
                    value={serverHost}
                    placeholder={lang.OfficialServer}
                    type="url"
                    onChange={(e) => setServerHost(e.target.value)}
                />
            </FormControl>

            <FormControl>
                <RequiredFormLabel label={lang.Username} trans={lang}/>
                <Input
                    startDecorator={<PersonIcon/>}
                    value={username}
                    placeholder={lang.Username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </FormControl>

            <FormControl>
                <RequiredFormLabel label={lang.Password} trans={lang}/>
                <Input
                    startDecorator={<PasswordIcon/>}
                    value={password}
                    type="password"
                    placeholder={lang.Password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormControl>

            <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1.5} sx={{mt: 3}}>
                <Button variant="outlined">
                    {lang.RegisterButton}
                </Button>

                <Button>
                    {lang.LoginButton}
                </Button>
            </Stack>

            <Link
                href="https://github.com/iewnfod"
                target="_blank"
                sx={{mt: 1, userSelect: 'none'}}
                fontSize="sm"
            >
                {lang.SetupOwnServer}
            </Link>
        </Stack>
    );
}

export default IndexPopup;
