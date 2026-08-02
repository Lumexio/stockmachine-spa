<template>
  <div class="pricing-page">
    <div class="pricing-header">
      <h1>Simple, transparent pricing</h1>
      <p>
        Start with Free and upgrade only when you need more locations, products, or export
        formats. Paid plan selection continues in the authenticated web app.
      </p>
    </div>

    <div class="pricing-grid">
      <!-- Free Tier -->
      <div class="pricing-card">
        <div class="pricing-card__tier">Free</div>
        <div class="pricing-card__price">
          <span class="price-amount">$0</span>
          <span class="price-period">/mo</span>
        </div>
        <p class="pricing-card__tagline">For starters and simple testing.</p>
        <ul class="pricing-card__features">
          <li><span class="check">✓</span> 1 Location</li>
          <li><span class="check">✓</span> Up to 50 Products</li>
          <li><span class="check">✓</span> 1 User Account</li>
          <li><span class="check">✓</span> Local use without cloud connection</li>
          <li><span class="check">✓</span> Google Drive required for Free cross-device catalog sync</li>
          <li><span class="check">✓</span> Excel (.xlsx) Export Only</li>
        </ul>
        <button class="download-button pricing-cta" @click="openWebApp('/register')">
          Start Free
        </button>
        <p class="pricing-cta-note">Create an account with no paid plan required.</p>
      </div>

      <!-- Pro Tier (highlighted) -->
      <div class="pricing-card pricing-card--pro">
        <div class="pricing-card__badge">Most Popular</div>
        <div class="pricing-card__tier">Pro</div>
        <div class="pricing-card__price">
          <span class="price-amount">$4</span>
          <span class="price-period">Solo / $7 Org</span>
        </div>
        <p class="pricing-card__tagline">For growing stores & active inventories.</p>
        <ul class="pricing-card__features">
          <li><span class="check">✓</span> 5 Locations</li>
          <li><span class="check">✓</span> Up to 150 Products</li>
          <li><span class="check">✓</span> Up to 15 Team Accounts</li>
          <li><span class="check">✓</span> Web, Desktop & Mobile Sync</li>
          <li><span class="check">✓</span> VPS-managed sync without a personal cloud account</li>
          <li><span class="check">✓</span> CSV, JSON & Excel Import/Export</li>
        </ul>
        <div class="pricing-cta-group">
          <button
            class="download-button pricing-cta premium-cta"
            @click="continueToPlan('pro', 'individual')"
          >
            Continue to Pro Solo
          </button>
          <button
            class="download-button pricing-cta premium-cta"
            @click="continueToPlan('pro', 'team')"
          >
            Continue to Pro Org
          </button>
        </div>
        <p class="pricing-cta-note">Sign in to review the available billing flow before activation.</p>
      </div>

      <!-- Max Tier -->
      <div class="pricing-card">
        <div class="pricing-card__tier">Max</div>
        <div class="pricing-card__price">
          <span class="price-amount">$11.99</span>
          <span class="price-period">Solo / $19.99 Org</span>
        </div>
        <p class="pricing-card__tagline">Maximum capacity with PDF Reports & Team Admin.</p>
        <ul class="pricing-card__features">
          <li><span class="check">✓</span> 10 Locations</li>
          <li><span class="check">✓</span> Up to 500 Products</li>
          <li><span class="check">✓</span> Up to 50 Team Accounts</li>
          <li><span class="check">✓</span> Team Member Administration</li>
          <li><span class="check">✓</span> VPS-managed multi-location storage</li>
          <li><span class="check">✓</span> CSV, JSON, Excel & PDF Reports</li>
        </ul>
        <div class="pricing-cta-group">
          <button
            class="download-button pricing-cta premium-cta"
            @click="continueToPlan('max', 'individual')"
          >
            Continue to Max Solo
          </button>
          <button
            class="download-button pricing-cta premium-cta"
            @click="continueToPlan('max', 'team')"
          >
            Continue to Max Org
          </button>
        </div>
        <p class="pricing-cta-note">Sign in to review the available billing flow before activation.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
function openWebApp(path) {
  window.open(`https://app.stockmachine.online${path}`, '_blank', 'noopener,noreferrer')
}

function continueToPlan(targetPlan, targetAccountType) {
  openWebApp(`/profile?plan=${targetPlan}&type=${targetAccountType}`)
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
  max-width: 1050px;
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
  border: 2px solid var(--brand-red-primary);
  box-shadow: 0 0 0 1px var(--brand-red-primary);
}

.pricing-card--pro:hover {
  box-shadow: 0 4px 24px rgba(244, 67, 54, 0.35);
}

.pricing-card__badge {
  position: absolute;
  top: -0.75rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--brand-red-primary);
  color: #ffffff;
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
  color: var(--brand-red-primary);
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
  color: var(--brand-red-primary);
  font-weight: 700;
  flex-shrink: 0;
}

.pricing-cta {
  width: 100%;
}

.pricing-cta-group {
  display: flex;
  gap: 10px;
  width: 100%;
  margin-top: auto;
}

.pricing-cta-note {
  color: var(--color-text);
  font-size: 0.78rem;
  line-height: 1.4;
  margin: -0.25rem 0 0;
  text-align: center;
}

.premium-cta {
  background: linear-gradient(90deg, #4caf50, #2196f3);
  background-size: 200% auto;
  border: none;
  color: white;
  transition:
    0.5s ease,
    box-shadow 0.3s ease,
    transform 0.2s ease;
  box-shadow: 0 4px 15px -3px rgba(76, 175, 80, 0.4);
}

.premium-cta:hover {
  background-position: right center;
  box-shadow: 0 8px 20px -5px rgba(76, 175, 80, 0.6);
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  .pricing-cta-group {
    flex-direction: column;
  }
}
</style>
