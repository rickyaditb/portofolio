<script>
    import { fly } from "svelte/transition";
    import { inview } from "svelte-inview";

    import Data from "../data.json";
    import Configuration from "../configuration.json";
    import Translation from "../translation.json";

    export let lang;
    export let dark;
    let isInView;
</script>

<section
    use:inview={Configuration["animation"].options}
    on:enter={() => {
        isInView = true;
    }}
    class={isInView ? "opacity-100" : "opacity-0"}
    id="experience"
>
{#key isInView}
    {#key lang}
    <h1 in:fly={Configuration['animation']['in-fly']} class="font-bold text-4xl">{Translation[lang].experience}</h1>
    {/key}
    <div in:fly={Configuration['animation']['in-fly']} class="flex gap-5 p-3 mt-2 items-center">
        <img
            src="assets/img/experience-1.png"
            class="w-24 h-24 bg-red-300s"
            alt="logo"
        />
        <div>
            <h2 class="font-bold text-2xl">Bogor Religious Court</h2>
            <p>
                Intern Web Developer (July 2022 - September 2022) <br>
                ● Develop GPS Based Presence System for intern from various schools and universities. <br>
                ● Help with various administrations for its staff and employees
            </p>
        </div>
    </div>
    {/key}
</section>
