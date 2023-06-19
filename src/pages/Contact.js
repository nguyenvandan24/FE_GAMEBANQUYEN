import React, {useEffect} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
const Contact=()=>{
    const { t, i18n } = useTranslation();
    const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
    const usenavigate = useNavigate();
    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
            usenavigate('/Login');

        }

    }, []);

    return (
        <Wrapper>
            <h2 className="common-heading">{t('contact')}</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.214595068015!2d106.78689077697175!3d10.871276361650994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276398969f7b%3A0x9672b7efd0893fc4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOw7RuZyBMw6JtIFRQLiBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1684154436104!5m2!1svi!2s"
                width="100%"
                height="400"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div className="container">
                <div className="contact-form">
                    <form action="https://formspree.io/f/mdovjlpe" method="POST" className="contact-inputs">
                        <input type="text" placeholder="username" name={t('enterName')} autoComplete="off" required/>
                        <input type="email" name="Email" placeholder="Email" autoComplete="off" required/>

                        <textarea name="Message" cols="30" rows="10" autoComplete="off" placeholder={t('enterMessage')} required></textarea>
                        <input type="submit" value={t('send')}/>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
}
//}

export default Contact;
