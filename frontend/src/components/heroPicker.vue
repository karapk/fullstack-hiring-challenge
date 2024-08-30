<template>
	<div class="relative">
		<span
			class="
				block
				w-32
				px-4
				py-2
				text-sm
				font-medium
				text-white
				bg-indigo-600
				rounded-lg
				hover:bg-indigo-700
				focus:outline-none
				focus-visible:ring
				focus-visible:ring-indigo-500
				focus-visible:ring-opacity-75
			"
			role="button"
			tabindex="0"
			haspopup="true"
			v-bind:expanded="isOpen"
			v-on:click="toggleMenu"
		>
			<span v-if="!value">Select a Hero</span>
			<span v-else v-text="`Selected: ${value?.name}`"></span>
		</span>
		<ul
			v-show="isOpen"
			class="
				absolute
				right-0
				z-10
				w-32
				mt-2
				origin-top-right
				bg-slate-800
				border border-slate-500
				rounded-md
				shadow-lg
			"
			role="menu"
		>
			<li v-for="option in options" v-bind:key="option.name" class="py-1">
				<a
					href="#"
					class="
						flex
						items-center
						px-4
						py-2
						text-sm text-slate-400
						hover:bg-slate-700
						gap-2
					"
					v-bind:tabindex="isOpen ? 0 : -1"
					v-on:click="setOption(option)"
				>
					<img
						v-bind:src="option.avatar"
						alt="avatar"
						class="w-6 aspect-square rounded"
					>
					<span v-text="option.name"></span>
				</a>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">

import { onMounted, onUnmounted, ref } from 'vue';

import type { Hero } from '../types';
import type { PropType } from 'vue';

const { value, options } = defineProps({
	value: {
		type: Object as PropType<Hero | null>,
		default: null,
	},
	options: {
		type: Array as PropType<Hero[]>,
		default: () => [],
	},
});

const emit = defineEmits(['selected']);
const isOpen = ref(false);
const selectedItem = ref(0);

function toggleMenu() {
	isOpen.value = !isOpen.value;
}

function setOption(option: Hero) {
	emit('selected', option);
	isOpen.value = false;
}

function focusMenuItem(index: number) {
	const items = document.querySelectorAll('li');
	if (items[index]) {
		(items[index].firstChild as HTMLElement).focus();
	}
}

function handleGlobalKeydown(event: KeyboardEvent) {
	if (event.key === ' ') {
		toggleMenu();
		event.preventDefault();
	}

	if (event.key === 'Escape') {
		isOpen.value = false;
	}

	if (isOpen.value) {
		if (event.key === 'ArrowDown') {
			if (selectedItem.value >= options.length - 1) {
				selectedItem.value = 0;
			} else {
				selectedItem.value++;
			}
			focusMenuItem(selectedItem.value);
		} else if (event.key === 'ArrowUp') {
			if (selectedItem.value <= 0) {
				selectedItem.value = options.length - 1;
			} else {
				selectedItem.value--;
			}
			focusMenuItem(selectedItem.value);
		}
	}
}
onMounted(() => {
	document.addEventListener('keydown', handleGlobalKeydown);
});

onUnmounted(() => {
	document.removeEventListener('keydown', handleGlobalKeydown);
});
</script>
