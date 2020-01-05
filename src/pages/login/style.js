import styled from 'styled-components';
import bg from '../../static/images/timg.jpg'

export const LoginContainer = styled.div`
    height:100%;
    width:100%;
    overflow:hidden;
    background-image:url(${bg});
    background-size:cover;
    .loginContent{
        width:340px;
        height:440px;
        position:relative;
        top:50%;
        margin-top:-220px;
        left:20%;
        border-radius:10px;
        padding:15px;
        padding-top:100px;
        background:rgb(246,246,246);
        .loginLogo{
            width:100%;
            height:100px;
            position:absolute;
            top:0;
            left:0;
            display:flex;
            justify-content:center;
        }
        .loginLogo img{
            display:block;
        }
    }
`