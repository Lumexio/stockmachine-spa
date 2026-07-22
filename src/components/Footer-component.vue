<template>
  <footer class="premium-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3 class="footer-title">Connect</h3>
        <div class="social-links">
          <a href="https://github.com/Lumexio" target="_blank" class="social-icon">
            <FontAwesomeIcon size="xl" :icon="faGithubAlt" />
          </a>
          <a
            href="https://www.linkedin.com/in/francisco-salazar-mendoza/"
            target="_blank"
            class="social-icon"
          >
            <FontAwesomeIcon size="xl" :icon="faLinkedin" />
          </a>
        </div>
      </div>

      <div class="footer-section footer-brand">
        <img src="@/assets/icon.png" alt="StockMachine Logo" class="footer-logo" />
        <p class="copyright">© 2026 StockMachine. All rights reserved.</p>
        <a href="https://www.paypal.com" target="_blank" class="subtle-coffee-link">
          <FontAwesomeIcon :icon="faMugHot" class="subtle-coffee-icon" />
          Buy the dev a coffee
        </a>
      </div>

      <div class="footer-section">
        <h3 class="footer-title">Powered By</h3>
        <div class="tech-links">
          <a href="https://vuejs.org/" target="_blank" class="tech-icon">
            <Icon icon="mingcute:vue-fill" width="1.8rem" height="1.8rem" />
          </a>
          <a href="https://electronjs.com" target="_blank" class="tech-icon">
            <Icon icon="fontisto:electronjs" width="1.8rem" height="1.8rem" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<style scoped>
.premium-footer {
  position: relative;
  background-color: var(--color-background-soft);
  padding: 3rem 2rem;
  margin-top: 4rem;

  border-top: 1px solid var(--color-border);
}

.premium-footer::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  margin-top: 0.5rem;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--brand-red-primary), transparent);
  opacity: 0.5;
}

.subtle-coffee-link {
  display: inline-flex;
  align-items: center;

  font-size: 0.85rem;
  color: var(--color-text);
  opacity: 0.6;
  text-decoration: none;

  transition: all 0.3s ease;
}

.subtle-coffee-link:hover {
  opacity: 1;
  color: #ff9800;
}

.subtle-coffee-icon {
  font-size: 1rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.footer-brand {
  flex: 1;
  min-width: 200px;
  margin-top: 1rem;
}

.footer-logo {
  width: 40px;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.footer-logo:hover {
  filter: grayscale(0%);
  opacity: 1;
}

.footer-title {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-text);
  font-weight: 700;
  margin: 0;
}

.social-links,
.tech-links {
  display: flex;
  gap: 1.5rem;
}

.social-icon,
.tech-icon {
  color: var(--color-text);
  opacity: 0.7;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: var(--color-background-mute);
  border: 1px solid var(--color-border);
}

.social-icon:hover,
.tech-icon:hover {
  opacity: 1;
  color: var(--brand-red-primary);
  transform: translateY(-3px);
  border-color: var(--brand-red-primary);
  box-shadow: 0 5px 15px -5px rgba(229, 57, 53, 0.4);
}

.copyright {
  font-size: 0.85rem;
  color: var(--color-text);
  opacity: 0.6;
  margin: 0;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
  .footer-brand {
    order: 3;
  }
}
</style>
