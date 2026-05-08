<script>
  export let href = "#";
  export let active = false;
</script>

<a 
  {href} 
  class="text-[13px] px-2 py-1.5 rounded transition-all duration-150 {active ? 'text-accent' : 'text-text-muted hover:text-text-main hover:bg-surface'}"
>
  <slot />
</a>
