import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { editarPaciente, obtenerPaciente } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarPaciente = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        setValue
    } = useForm();
    const {id} = useParams();
    const navegacion = useNavigate()

    useEffect(()=>{
        obtenerPaciente(id).then((respuesta))=>{
            
        }
    }
}