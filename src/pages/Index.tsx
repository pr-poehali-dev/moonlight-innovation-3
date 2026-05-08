export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">FOOD<span style={{ color: "var(--primary)" }}>*</span>CAMPUS</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">Как работает</a>
          <a href="#">Корпуса</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Скачать приложение</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ЕДА
              <br />
              БЕЗ <span>ОЧЕРЕДИ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Предзаказывай еду прямо с телефона — забирай готовое или получай доставку в любой корпус ДВФУ. Без ожидания, без суеты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Сделать заказ
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div className="hero-img" style={{ background: "url('https://images.unsplash.com/photo-1567521464027-f127ff144326?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') center center / cover" }}>
            <div className="sticker">
              ДОСТАВКА
              <br />
              В КАМПУС
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ДВФУ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ГОРЯЧЕЕ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ПРЕДЗАКАЗ ЗА 15 МИНУТ * ДОСТАВКА В КОРПУС * БЕЗ ОЧЕРЕДЕЙ * ОПЛАТА ОНЛАЙН * СВЕЖАЯ ЕДА КАЖДЫЙ ДЕНЬ *
            ПРЕДЗАКАЗ ЗА 15 МИНУТ * ДОСТАВКА В КОРПУС * БЕЗ ОЧЕРЕДЕЙ * ОПЛАТА ОНЛАЙН * СВЕЖАЯ ЕДА КАЖДЫЙ ДЕНЬ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ТОП СЕГОДНЯ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Фирменный бургер"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Фирменный бургер</h3>
                  <span className="price">290 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Сочная котлета, хрустящий салат, домашний соус — быстро и вкусно между парами.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Популярное
              </span>
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Боул с курицей"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Боул с курицей</h3>
                  <span className="price">350 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Рис, гриль-курица, свежие овощи и соус терияки. Заряд на целый день.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Новинка
              </span>
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Пицца слайс"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Пицца слайс</h3>
                  <span className="price">180 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Тонкое тесто, томатный соус, моцарелла — идеально на перекус между лекциями.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">КАК ЭТО РАБОТАЕТ.</h2>
            <p className="vibe-text">
              Открой приложение FoodCampus, выбери блюдо из ближайшей точки, оплати онлайн — и забери готовое в удобное время или жди доставку прямо к корпусу. Никаких очередей, никакого стресса перед парой.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Подробнее
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @FOODCAMPUS.DVFU
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">FOOD<span style={{ color: "var(--primary)" }}>*</span>CAMPUS</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Мобильный сервис предзаказа и доставки еды для студентов и сотрудников ДВФУ. Остров Русский, кампус ДВФУ.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Как работает
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика конфиденциальности
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Поддержка
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Корпуса</h4>
          <ul>
            <li>Корпус A</li>
            <li>Корпус B</li>
            <li>Корпус C</li>
            <li>Корпус D</li>
          </ul>
        </div>
        <div>
          <h4>Время работы</h4>
          <table className="footer-hours">
            <tbody>
              <tr>
                <td>Пн–Пт</td>
                <td>08:00 – 21:00</td>
              </tr>
              <tr>
                <td>Суббота</td>
                <td>09:00 – 18:00</td>
              </tr>
              <tr>
                <td>Воскресенье</td>
                <td>Выходной</td>
              </tr>
            </tbody>
          </table>
        </div>
      </footer>
    </>
  );
}
