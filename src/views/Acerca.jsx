const Acerca = () => {
  return (
    <section className="acerca-section">
      <h2>Acerca del Proyecto</h2>
      <div className="acerca-card">
        <h3>Objetivo</h3>
        <p>
          Este proyecto es el trabajo práctico final de Desarrollo Web Frontend.
          Su objetivo es extender la base provista durante el curso, integrando
          funcionalidades de gestión de usuarios, persistencia de estado,
          documentación y despliegue.
        </p>

        <h3>Partes principales</h3>
        <ul>
          <li>Registro de usuarios con validaciones</li>
          <li>Login y logout</li>
          <li>Protección de rutas privadas</li>
          <li>Chat con contexto global</li>
          <li>Página pública de documentación</li>
        </ul>

        <h3>Tecnologías utilizadas</h3>
        <p>React, Vite, React Router, Context API, CSS.</p>

        <h3>Decisiones de desarrollo</h3>
        <p>
          Se optó por usar exports nombrados para mayor consistencia, y se
          trabajó en un flujo claro de registro → chat → logout → login.
        </p>

        <h3>Observaciones personales</h3>
        <p>
          El proyecto se desarrolló de manera iterativa, con commits artesanales
          que reflejan el progreso paso a paso. Se priorizó la claridad en el
          código y la experiencia de usuario.
        </p>
      </div>
    </section>
  );
};

export { Acerca };
