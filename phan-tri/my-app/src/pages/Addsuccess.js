import React from 'react';
import { Link } from 'react-router-dom';
function Addsucsess() {
    return (
        <div className="add-box col-11 col-sm-9 col-md-6 col-lg-5 col-xl-3 d-flex flex-column justify-content-center align-items-center">
                <img className="img-fluid" src='https://phantri-techmaster.github.io/imgpamee/checked.png' alt=""></img>
            <p className="text2">Thêm vào giỏ hàng thành công</p>
            <Link to="/giohang"><div className="add-check"><p className="text1">Kiểm tra giỏ hàng</p></div></Link>
        </div>
    );
}

export default Addsucsess; 