<script lang="ts">
  import { onDestroy } from 'svelte';
  import { name, phone, email, message, openModal, showApplicant } from '../../data';
  onDestroy(() => {
    openModal.set(false)
    showApplicant.set(false)
  });
</script>

<div class="flex justify-center items-center h-screen">
  <div class="border border-gray-300 bg-transparent rounded-lg overflow-hidden w-[400px] h-[200px]" >
    <div class="px-6 py-4">
      <h1 class="text-2xl font-bold mb-2">User</h1>
      {#if $openModal}
        <div class="modal" class:modal-open={$openModal}>
          <div class="modal-box">
            <p class="py-4">{$message}</p>
            <div class="modal-action">
              <button class="btn" on:click={()=>{openModal.set(false)}}>Fechar</button>
            </div>
          </div>
        </div>
      {/if}

      <div class="absolute top-0 right-0 mt-4 mr-4">
        <a href="/">
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">Home</button>
        </a>
      </div>

      <p class="mt-4 border-b border-gray-300 pb-2">Nome: {$name}</p>
      <p class="border-b border-gray-300 pb-2">Telefone: {$phone}</p>
      <p class="border-gray-300 pb-2">Email: {$email}</p>
    </div>
  </div>
</div>

