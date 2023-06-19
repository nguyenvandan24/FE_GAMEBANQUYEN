import React from "react";
import styled from "styled-components";
import {Button} from "../styles/Button";
import {NavLink} from "react-router-dom";
import {FaDiscord, FaFacebook, FaInstagram} from "react-icons/fa";
import {useTranslation} from "react-i18next";

export default function Footer () {
    const { t, i18n } = useTranslation();
        return(
            <Wrapper>
                <section className="contact-short">
                    <div className="grid grid-two-column">
                        <div>
                            <h3>{t('talk')}</h3>
                        </div>
                        <div>
                            <Button>
                                <NavLink to="/contact">{t('start')}</NavLink>
                            </Button>
                        </div>
                    </div>
                </section>

                <footer>
                    <div className="container grid grid-four-column">
                        <div className="footer-about">
                            <p>{t('sale')}</p>
                            <p><b>{t('address')}: </b>{t('addressUs')}</p>
                        </div>

                        <div className="footer-subscribe">
                            <h3>{t('sub')}</h3>
                            <form action="#">
                                <input type="email" placeholder={t('email')} required/>
                                <input type="submit" value={t('subscribe')}/>
                            </form>
                        </div>

                        <div className="footer-social">
                            <h3>{t('follow')}</h3>
                            <div className="footer-social--icons">
                                <div>
                                    <FaDiscord className="icons"/>
                                </div>
                                <div>
                                    <FaInstagram className="icons"/>
                                </div>
                                <div>
                                    <a href="facebook.com" target="_blank"><FaFacebook className="icons"/></a>
                                </div>
                            </div>
                        </div>

                        <div className="footer-contact">
                            <h3>{t('contactUs')}</h3>
                            <p><b>{t('phone')}: </b>+84 021875242</p>
                            <p><b>Email: </b>game@gmail.com</p>
                        </div>
                    </div>
                    <div className="footer-bottom--section">
                        <hr/>
                        <div className="container">
                            <p>@{new Date().getFullYear()} ThapaTechnical. All Rights Reserved</p>
                        </div>
                    </div>
                </footer>
            </Wrapper>
        );
    }

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .container{
    text-align: center;
  }
  .contact-short {
    max-width: 60vw;
    margin: -71px 0px -43px 260px;
    padding: 3rem 9rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3{
      color: ${({theme}) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({theme}) => theme.colors.hr};
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({theme}) => theme.colors.hr};

        .icons {
          color: ${({theme}) => theme.colors.hr};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media(max-width: ${({ theme }) => theme.media.mobileToDesktop}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;
