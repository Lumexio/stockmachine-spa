<template>
  <div class="pricing-page">
    <div class="pricing-header">
      <h1>Simple, transparent pricing</h1>
      <p>Choose the plan that works for you. Upgrade or downgrade at any time.</p>
    </div>

    <div class="pricing-grid">
      <!-- Free Tier -->
      <div class="pricing-card">
        <div class="pricing-card__tier">Free</div>
        <div class="pricing-card__price">
          <span class="price-amount">$0</span>
          <span class="price-period">/mo</span>
        </div>
        <p class="pricing-card__tagline">Perfect for individuals getting started.</p>
        <ul class="pricing-card__features">
          <li><span class="check">✓</span> 1 location</li>
          <li><span class="check">✓</span> Up to 500 products</li>
          <li><span class="check">✓</span> Desktop app only</li>
          <li><span class="check">✓</span> Community support</li>
        </ul>
        <button class="download-button pricing-cta" @click="$router.push('/download')">
          Get Started
        </button>
      </div>

      <!-- Pro Tier (highlighted) -->
      <div class="pricing-card pricing-card--pro">
        <div class="pricing-card__badge">Most Popular</div>
        <div class="pricing-card__tier">Pro</div>
        <div class="pricing-card__price">
          <span class="price-amount">$9</span>
          <span class="price-period">/mo</span>
        </div>
        <p class="pricing-card__tagline">For small teams managing multiple sites.</p>
        <ul class="pricing-card__features">
          <li><span class="check">✓</span> 5 locations</li>
          <li><span class="check">✓</span> Unlimited products</li>
          <li><span class="check">✓</span> Desktop + Web app</li>
          <li><span class="check">✓</span> Email support</li>
          <li><span class="check">✓</span> Export (CSV / JSON / XLSX)</li>
        </ul>
        <button class="download-button pricing-cta" @click="openWebApp">Get Started</button>
      </div>

      <!-- Enterprise Tier -->
      <div class="pricing-card">
        <div class="pricing-card__tier">Enterprise</div>
        <div class="pricing-card__price">
          <span class="price-amount">Custom</span>
        </div>
        <p class="pricing-card__tagline">Built for large organisations with complex needs.</p>
        <ul class="pricing-card__features">
          <li><span class="check">✓</span> Unlimited locations</li>
          <li><span class="check">✓</span> Unlimited products</li>
          <li><span class="check">✓</span> All clients (desktop, web, mobile)</li>
          <li><span class="check">✓</span> Priority support</li>
          <li><span class="check">✓</span> Custom integrations</li>
        </ul>
        <button class="download-button pricing-cta pricing-cta--outline" @click="contactUs">
          Contact Us
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
function openWebApp() {
  window.open('https://stockmachine-web.netlify.app', '_blank')
}

function contactUs() {
  window.location.href = 'mailto:contact@stockmachine.app'
}
</script>

<style scoped>
.pricing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--large-gap);
  padding: var(--large-gap) 0;
}

.pricing-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--standard-gap);
}

.pricing-header p {
  color: var(--color-text);
  font-size: 1.1rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: var(--large-gap);
  width: 100%;
  max-width: 960px;
  align-items: start;
}

.pricing-card {
  display: flex;
  flex-direction: column;
  gap: var(--standard-gap);
  background-color: var(--color-background-mute);
  border: 1px solid var(--color-border);
  border-radius: var(--card-border-radius);
  padding: var(--large-gap);
  position: relative;
  transition: box-shadow var(--transition-speed-medium);
}

.pricing-card:hover {
  box-shadow: 0 4px 20px var(--color-border-hover);
}

.pricing-card--pro {
  border: 2px solid var(--primary-button-background-color);
  box-shadow: 0 0 0 1px var(--primary-button-background-color);
}

.pricing-card--pro:hover {
  box-shadow: 0 4px 24px rgba(34, 197, 94, 0.35);
}

.pricing-card__badge {
  position: absolute;
  top: -0.75rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary-button-background-color);
  color: var(--color-text-primary-button);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.2rem 0.8rem;
  border-radius: 99px;
  white-space: nowrap;
}

.pricing-card__tier {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-heading);
}

.pricing-card--pro .pricing-card__tier {
  color: var(--primary-button-background-color);
}

.pricing-card__price {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}

.price-amount {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--color-heading);
}

.price-period {
  font-size: 1rem;
  color: var(--color-text);
}

.pricing-card__tagline {
  color: var(--color-text);
  font-size: 0.9rem;
  line-height: 1.5;
}

.pricing-card__features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0;
  margin: 0;
  flex: 1;
}

.pricing-card__features li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text);
  font-size: 0.9rem;
}

.check {
  color: var(--primary-button-background-color);
  font-weight: 700;
  flex-shrink: 0;
}

.pricing-cta {
  width: 100%;
  margin-top: auto;
}

.pricing-cta--outline {
  background-color: transparent;
  border: 2px solid var(--primary-button-background-color);
  color: var(--primary-button-background-color);
}

.pricing-cta--outline:hover {
  background-color: var(--primary-button-background-color);
  color: var(--color-text-primary-button);
  box-shadow: none;
}
</style>
