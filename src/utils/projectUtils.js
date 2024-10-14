export const handleChange = (e, setProject) => {
  const { name, value } = e.target;
  setProject((prevProject) => ({
    ...prevProject,
    [name]: value,
  }));
};
export const handleCloseModal = (setModal, redirigir) => {
  setModal(false);
  redirigir('/dashboard');
};
