function Menu(){
    const handleKardexClick = () => {
        window.location.href = './Kardex';
    };
    const handleInventarioClick = () => {
        window.location.href = './Inventario';
    };
    const handleHistoryClick = () => {
        window.location.href = './History';
    };
    const handleCRMClick = () => {
        window.location.href = './CRM';
    };
    const handleLogInClick = () => {
        localStorage.setItem("autenticado", true);
        window.location.href = './';
    };
    const handleLogOutClick = () => {
        localStorage.setItem("autenticado", false);
        window.location.href = './';
    };
    return(
        <div>
          <button onClick={handleKardexClick}>Kardex</button>
          <button onClick={handleInventarioClick}>Inventario</button>
          <button onClick={handleHistoryClick}>History</button>
          <button onClick={handleCRMClick}>CRM</button>
          <button onClick={handleLogInClick}>LogIn</button>
          <button onClick={handleLogOutClick}>LogOut</button>
        </div>
    )
}

export default Menu;