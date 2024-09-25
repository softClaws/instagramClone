import { Input, Button, Alert, AlertIcon, Text,Box } from "@chakra-ui/react"
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
});
const {loading, error, login}=useLogin()
  return (
    <>
     <Input
                placeholder="dummy_user@gmail.com "
                fontSize={14}
                type = 'email'
                value={inputs.email}
                size={"sm"}
                onChange = {(e) => setInputs({...inputs, email: e.target.value})}

            />
            <Input
                placeholder="Dummy123"
                fontSize={14}
                type="password"
                value={inputs.password}
                size={"sm"}
                onChange = {(e) => setInputs({...inputs, password: e.target.value})}
                
            />

            { error && (
                <Alert status ='error' fontSize = {13} p ={2} borderRadius={4}>
                    <AlertIcon fontSize ={12}/>
                    {error.message}
                </Alert>
              )
            
            }

            <Button w ={"full"} colorScheme = 'blue' size = {"sm"} fontSize = {14} isLoading = {loading}  onClick ={() => login(inputs)} >
                            Log in
                        </Button>
                        <Box mx = {2} fontSize={12} color={'whiteAlpha.700'} >
                          {`Login to your existing account OR`}
                         <Text> use the placeholder credentials to inspect the app </Text>
  
                          </Box>
    </>
  )
}

export default Login