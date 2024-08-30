<script setup lang="ts">
import { ref } from 'vue';



import AchillesAvatar from './assets/images/heros/achilles.png';
import HerculesAvatar from './assets/images/heros/hercules.png';
import OdysseusAvatar from './assets/images/heros/odysseus.png';
import heroPicker from './components/heroPicker.vue';

import type { Hero } from './types';

const heros = ref<Hero[]>([
	{
		name: 'Achilles',
		avatar: AchillesAvatar,
		speed: 10,
		strength: 4,
		intelligence: 6,
	},
	{
		name: 'Odysseus',
		avatar: OdysseusAvatar,
		speed: 6,
		strength: 5,
		intelligence: 9,
	},
	{
		name: 'Hercules',
		avatar: HerculesAvatar,
		speed: 6,
		strength: 10,
		intelligence: 4,
	},
]);
const hero = ref<Hero | null>(null);

const bonus = ref(0);
// const totalStats = ref(0);

function doBonus() {
	if (bonus.value >= 5) {
		return alert('Only 5 bonus allowed!');
	}
	bonus.value++; // increase bonus!
}


function handleUpdate(input: Hero) {
	console.log('change', input);
	hero.value = input;
}
function clearHero() {
	hero.value = null;
}
</script>

<template>
	<div
		class="
			bg-slate-800
			rounded
			max-w-sm
			grow
			w-full
			text-white
			flex flex-col
			gap-4
			p-4
		"
	>
		<h1>Hero Stats:</h1>
		<div class="flex gap-4">
			<heroPicker
				class="grow"
				v-bind:value="hero"
				v-bind:options="heros"
				v-on:selected="handleUpdate"
			></heroPicker>
			<button
				aria-label="Clear Hero"
				class="
					text-sm
					text-red-400
					border-red-500
					hover:bg-red-700
					border
					p-4
					px-4
					py-2
					rounded
					"
				type="button"
				v-on:click="clearHero"
			>
				Clear Hero
			</button>
			<button
				aria-label="Bonus"
				class="
					border-green-500
					text-sm text-green-400
					border
					p-4
					px-4
					py-2
					rounded
				"
				type="button"
				v-on:click="doBonus"
			>
				BONUS ✨{{ bonus > 0 ? `(${bonus})` : '' }} ✨
			</button>
		</div>
		<div v-if="hero" class="bg-slate-400 text-black rounded flex gap-2">
			<img
				v-bind:src="hero.avatar"
				class="w-52
				rounded
				object-fit: cover
				"
			>
			<div>
				<h2 class="uppercase text-xs mb-1x p-2">
					Hero Summary
				</h2>
				<p class="p-2">
					<span v-text="hero.name"></span>
				</p>
				<dl class="p-2">
					<dt class="uppercse text-sm">
						Speed:
					</dt>
					<dd v-text="hero.speed + bonus"></dd>
					<dt class="uppercse text-sm">
						Strength:
					</dt>
					<dd v-text="hero.strength + bonus"></dd>
					<dt class="uppercse text-sm">
						Intelligence:
					</dt>
					<dd v-text="hero.intelligence + bonus"></dd>
				</dl>
			</div>
		</div>
	</div>
</template>
