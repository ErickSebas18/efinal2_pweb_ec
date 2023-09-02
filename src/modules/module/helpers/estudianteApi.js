import axios from "axios"

const obtenerTokenFachada = async (bodyUsuario) => {
    return await obtenerToken(bodyUsuario);
  };
  
  const obtenerToken = async (bodyUsuario) => {
    console.log(bodyUsuario);
    const semilla = "semilla1";
    const data = axios
      .get(
        `http://localhost:8081/API/v1.0/Autorizacion/tokens/obtener/${semilla}`,
        bodyUsuario
      )
      .then((r) => r.data);
  
    return data;
  };

const obtenerEstudianteFacade = async () => {
    console.log("Entrando")
    return await obtenerEstudianteAxios()
}

const obtenerEstudianteAxios = async () => {
    const headers = {
        "Authorization": "Bearer ",
        "Mensaje": "Valor Obtenido"
    }
    const data = axios.get(`http://localhost:8080/API/v1/Inscripcion/estudiantes`, { headers: headers }).then(r => r.data)
    console.log(data)
    return data
}

const ingresarEstudianteFacade = (bodyEstudiante) => {
    ingresarEstudiante(bodyEstudiante)
}

const ingresarEstudiante = (bodyEstudiante, token) => {
    const headers = {
        "Authorization": "Bearer " + token,
        "Mensaje": "Valor Ingresado"
    }
    axios.post(`http://localhost:8080/API/v1/Inscripcion/estudiantes`, bodyEstudiante, { headers: headers }).then(r => r.data)
}

export { obtenerEstudianteFacade, ingresarEstudianteFacade }