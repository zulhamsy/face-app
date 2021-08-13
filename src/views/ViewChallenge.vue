<template>
  <!-- Navbar -->
  <the-navbar />
  <!-- Content -->
  <div class="container mx-auto px-4 pt-16">
    <main class="space-y-8">
      <!-- Short Desc -->
      <div>
        <base-input-label>Short Description</base-input-label>
        <p>Biasakan Minum Air Putih</p>
      </div>
      <!-- Description -->
      <div>
        <base-input-label>Description</base-input-label>
        <p>Minum banyak air putih, susu boleh tapi tanpa gula</p>
      </div>
      <!-- Starting Date -->
      <div>
        <base-input-label>Starting Date</base-input-label>
        <p>Friday, 13 August 2021</p>
      </div>
      <!-- Ending Date-->
      <div>
        <base-input-label>Ending Date</base-input-label>
        <p>Friday, 20 August 2021</p>
      </div>
      <!-- Failed Times -->
      <div>
        <base-input-label>Failed</base-input-label>
        <p>2 times</p>
      </div>
      <!-- CTA -->
      <div class="space-y-3">
        <base-button
          class="w-full"
          color="outlined"
        >
          Lost This Challenge
        </base-button>
        <base-button
          class="w-full"
          color="text"
        >
          Delete Challenge
        </base-button>
      </div>
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  @apply max-w-sm;
}
</style>