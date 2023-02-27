export const TOKEN_KEY = '&token';
export const ID_USUARIO = '&_id';
export const EMAIL_USUARIO = '&email';
export const SENHA_USUARIO = '&senha';
export const TIPO_USUARIO = '&tipo';

export const login = token => {
    localStorage.setItem(TOKEN_KEY,token);
}

export const logout = () => {
    localStorage.clear ()

}

export const setId = _id => localStorage.setItem(ID_USUARIO, _id);

export const getId = () => localStorage.getItem(ID_USUARIO);

export const setEmail = email => localStorage.setItem(EMAIL_USUARIO, email);

export const getEmail = () => localStorage.getItem(EMAIL_USUARIO);

export const setSenha = senha => localStorage.setItem(SENHA_USUARIO, senha);

export const getSenha = () => localStorage.getItem(SENHA_USUARIO);

export const setTipo = tipo => localStorage.setItem(TIPO_USUARIO, tipo);

export const getTipo = () => localStorage.getItem(TIPO_USUARIO);