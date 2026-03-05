import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ChatContext } from "../context/ChatContext";

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    pais: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register } = useContext(ChatContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const edadNum = Number(formData.edad);

    // Validaciones básicas
    if (formData.nombre.trim().length < 3) {
      return setError("El nombre debe tener al menos 3 caracteres");
    }
    if (formData.apellido.trim().length < 3) {
      return setError("El apellido debe tener al menos 3 caracteres");
    }
    if (!formData.email.includes("@")) {
      return setError("El email no es válido");
    }
    if (formData.password.length < 6) {
      return setError("La contraseña debe tener al menos 6 caracteres");
    }
    if (isNaN(edadNum) || edadNum <= 0) {
      return setError("La edad debe ser un número válido mayor a 0");
    }
    if (formData.pais.trim() === "") {
      return setError("El país es obligatorio");
    }

    setError("");

    // Registrar usuario en contexto
    if (register) {
      register(formData);
    }

    // Redirigir al chat
    navigate("/chat");
  };

  return (
    <section className="registro-dark-coquette">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit} className="registro-form-dark">
        <input
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />
        <input
          name="edad"
          type="number"
          placeholder="Edad"
          value={formData.edad}
          onChange={handleChange}
          required
        />
        <input
          name="pais"
          placeholder="País"
          value={formData.pais}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Registrarse</button>
      </form>

      {error && <p className="error-form">{error}</p>}

      {/* 👇 enlace a documentación pública */}
      <p className="acerca-link">
        <Link to="/acerca">Acerca del proyecto</Link>
      </p>
    </section>
  );
};

export { Registro };

