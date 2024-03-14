<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { name, email, phone, message, showApplicant, openModal } from '../data';
  import { imask } from 'svelte-imask';

  let count = 15;
  let interval: ReturnType<typeof setTimeout>;

  const formatCountTime = (time: number): string => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60 < 10 ? `0${time % 60}` : time % 60;
      return `${minutes}:${seconds}`;
  };

  const startCountdown = () => {
      interval = setTimeout(() => {
          count -= 1;
          if (count <= 0) {
              clearInterval(interval);
              message.set('Desafio finalizado com falha!');
              openModal.set(true);
          } else {
              startCountdown();
          }
      }, 1000);
  };

  const start = () => {
      if (!$name || !$phone || !$email) {
          message.set('Por favor, preencha todos os campos.');
          openModal.set(true);
          return;
      }

      const validateEmail = (value: string) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(value);
      };

      if (!validateEmail($email)) {
          message.set('Por favor, insira um endereço de email válido.');
          openModal.set(true);
          return;
      }

      showApplicant.set(true);
      startCountdown();
  };

  const submit = () => {
      clearInterval(interval);
      message.set('Desafio finalizado com sucesso!');
      openModal.set(true);
  };

  onDestroy(() => clearInterval(interval));
  
</script>

<section class="flex justify-center items-center h-screen">
  {#if $showApplicant}
  <div class="absolute top-0 right-0 m-4">
      <a href="/applicant">
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">User</button>
      </a>
  </div>
  {/if}

  <div class="border rounded-lg shadow-md p-8 card max-w-md">
      {#if $openModal}
      <div class="modal" class:modal-open={$openModal}>
          <div class="modal-box p-4">
              <p>{$message}</p>
              <div class="modal-action mt-4">
                  <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" on:click={() => {openModal.set(false)}}>Fechar</button>
              </div>
          </div>
      </div>
      {/if}

      {#if $showApplicant}
      <p class="mb-4">Contagem regressiva: {formatCountTime(count)}</p>
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" on:click={submit}>Enviar</button>
      {:else}
      <form class="flex flex-col w-[400px] p-4">
          <label for="name" class="mb-2 font-bold">Nome</label>
          <input type="text" id="name" name="name" class="px-4 py-2 mb-4 border rounded-lg" bind:value={$name} />
          <label for="phone" class="mb-2 font-bold">Telefone</label>
          <input type="text" id="phone" name="phone" class="px-4 py-2 mb-4 border rounded-lg" bind:value={$phone} use:imask={{ mask: '(00)0000-0000' }} />
          <label for="email" class="mb-2 font-bold">Email</label>
          <input type="email" id="email" name="email" class="px-4 py-2 mb-4 border rounded-lg" bind:value={$email} />
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-4 rounded-full" on:click={start}>Iniciar Desafio</button>
      </form>
      {/if}
  </div>
</section>
