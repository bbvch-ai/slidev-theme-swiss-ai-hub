<template>
  <div class="relative h-full w-full overflow-hidden bg-bbv-black">
    <!-- SVG filter for goo effect -->
    <svg class="hidden">
      <defs>
        <filter id="goo">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="10"
            result="blur"
          />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite
            in="SourceGraphic"
            in2="goo"
            operator="atop"
          />
        </filter>
      </defs>
    </svg>

    <div class="gradients-container absolute inset-0">
      <div class="gradient-orb g1" />
      <div class="gradient-orb g2" />
      <div class="gradient-orb g3" />
      <div class="gradient-orb g4" />
      <div class="gradient-orb g5" />
    </div>

    <div class="absolute inset-0">
      <slot />
    </div>
  </div>
</template>

<script setup>
// No script needed - pure CSS animations
</script>

<style>
/* Custom CSS for animations and special effects that can't be done with UnoCSS */
.gradients-container {
  filter: url(#goo) blur(30px);
}

.gradient-orb {
  @apply absolute;
  width: 600px;
  height: 600px;
  mix-blend-mode: hard-light;
}

/* Gradient 1 - Vertical movement */
.g1 {
  opacity: 0.7;
  background: radial-gradient(circle at center, rgba(68, 0, 0, 0.9) 0%, transparent 50%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: moveVertical 20s ease infinite;
}

/* Gradient 2 - Circular movement (reverse) */
.g2 {
  opacity: 0.7;
  background: radial-gradient(circle at center, rgba(60, 0, 0, 0.9) 0%, transparent 50%);
  top: 30%;
  left: 30%;
  transform: translate(-50%, -50%);
  animation: moveInCircle 15s reverse infinite;
}

/* Gradient 3 - Circular movement */
.g3 {
  opacity: 0.6;
  background: radial-gradient(circle at center, rgba(58, 0, 0, 0.8) 0%, transparent 50%);
  top: 70%;
  left: 70%;
  transform: translate(-50%, -50%);
  animation: moveInCircle 25s linear infinite;
}

/* Gradient 4 - Horizontal movement */
.g4 {
  opacity: 0.7;
  background: radial-gradient(circle at center, rgba(68, 0, 0, 0.9) 0%, transparent 50%);
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: moveHorizontal 30s ease infinite;
}

/* Gradient 5 - Diagonal movement */
.g5 {
  opacity: 0.7;
  background: radial-gradient(circle at center, rgba(57, 0, 0, 0.8) 0%, transparent 50%);
  top: 60%;
  left: 40%;
  transform: translate(-50%, -50%);
  animation: moveDiagonal 18s ease infinite;
}

/* Animations */
@keyframes moveVertical {
  0%, 100% {
    transform: translate(-50%, -50%) translateY(-200px);
  }
  50% {
    transform: translate(-50%, -50%) translateY(200px);
  }
}

@keyframes moveInCircle {
  from {
    transform: translate(-50%, -50%) rotate(0deg) translateX(180px) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg) translateX(180px) rotate(-360deg);
  }
}

@keyframes moveHorizontal {
  0%, 100% {
    transform: translate(-50%, -50%) translateX(-220px);
  }
  50% {
    transform: translate(-50%, -50%) translateX(220px);
  }
}

@keyframes moveDiagonal {
  0%, 100% {
    transform: translate(-50%, -50%) translate(-160px, -160px);
  }
  50% {
    transform: translate(-50%, -50%) translate(160px, 160px);
  }
}
</style>