<script>
    import { createEventDispatcher } from "svelte";
    import { fly } from "svelte/transition";
    import { inview } from "svelte-inview";

    import Translation from "../translation.json";
    import Configuration from "../configuration.json";

    export let lang;
    export let dark;

    const dispatch = createEventDispatcher();
    let isInView;
    let visible = false;
    let menuVisible = false;

    let switchLang = (value) => {
        dispatch("language", value);
        visible = !visible;
    };
    let switchTheme = (value) => {
        dispatch("theme", value);
    };
    let switchMenu = () => {
        menuVisible = !menuVisible;
    };
    let anchorHandler = (value) => {
        dispatch("anchor", value);
    }
</script>

<header
    use:inview={Configuration["animation"].options}
    on:enter={() => {
        isInView = true;
    }}
    class={`${
        isInView ? "opacity-100" : "opacity-0"
    } mt-8 container mx-auto px-5 xl:px-44 hidden md:flex justify-between text-xl font-bold items-center`}
>
    {#key isInView}
        {#key lang}
            <div
                class="flex gap-10"
                in:fly={Configuration["animation"]["in-fly"]}
            >
                <button on:click={() => anchorHandler("home")}>{Translation[lang].navigation[0]}</button>
                <button on:click={() => anchorHandler("education")}>{Translation[lang].navigation[1]}</button>
                <button on:click={() => anchorHandler("certifications")}>{Translation[lang].navigation[2]}</button>
                <button on:click={() => anchorHandler("project")}>{Translation[lang].navigation[3]}</button>
            </div>
        {/key}
        <div class="flex gap-3" in:fly={Configuration["animation"]["in-fly"]}>
            <button
                on:click={switchTheme}
                class={`border-2 ${dark ? "border-white" : "border-gray-600"} transition duration-1000 ease-out p-3 rounded box-border h-12 flex justify-center items-center`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class={`w-6 h-6 ${
                        dark ? "text-white" : "text-main"
                    } transition duration-1000 ease-out`}
                >
                    <path
                        fill-rule="evenodd"
                        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>
            <!-- <div>
                <button
                    class={`border-2 ${dark ? "border-white" : "border-gray-600"} transition duration-1000 ease-out h-12 w-36 py-2 rounded flex gap-2 items-center justify-center`}
                    on:click={() => (visible = !visible)}
                >
                    <span>{Translation[lang].language[0]}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M9 2.25a.75.75 0 01.75.75v1.506a49.38 49.38 0 015.343.371.75.75 0 11-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 01-2.969 6.323c.317.384.65.753.998 1.107a.75.75 0 11-1.07 1.052A18.902 18.902 0 019 13.687a18.823 18.823 0 01-5.656 4.482.75.75 0 11-.688-1.333 17.323 17.323 0 005.396-4.353A18.72 18.72 0 015.89 8.598a.75.75 0 011.388-.568A17.21 17.21 0 009 11.224a17.17 17.17 0 002.391-5.165 48.038 48.038 0 00-8.298.307.75.75 0 01-.186-1.489 49.159 49.159 0 015.343-.371V3A.75.75 0 019 2.25zM15.75 9a.75.75 0 01.68.433l5.25 11.25a.75.75 0 01-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 01-1.36-.634l5.25-11.25A.75.75 0 0115.75 9zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
                <button
                    class={`absolute border-2 ${dark ? "border-white" : "border-gray-600"} transition duration-1000 ease-out h-12 w-36 py-2 text-center -mt-0.5 rounded ${
                        visible ? "opacity-100" : "opacity-0 invisible"
                    }`}
                    on:click={() => switchLang(Translation[lang].language[1])}
                >
                    <span>{Translation[lang].language[1]}</span>
                </button>
            </div> -->
        </div>
    {/key}
</header>
<header class="container mx-auto p-5 md:hidden">
    <div class="flex justify-between items-center">
        <button on:click={switchMenu}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class={`w-6 h-6 cursor-pointer`}
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>
        </button>
        <p class="text-2xl text-center">Portfolio</p>
        <div class="w-6 h-6" />
    </div>
    {#if menuVisible}
        <div
            in:fly={{ y: -20 }}
            out:fly={{ y: -20 }}
            class={`${dark ? "bg-main" : "bg-white"} absolute mt-16 h-fit px-5 top-0 pb-3 container over -ml-5 transition ease-out duration-1000`}
        >
            <div class="flex flex-col gap-5 font-bold">
                <a href="#home">{Translation[lang].navigation[0]}</a>
                <a href="#education">{Translation[lang].navigation[1]}</a>
                <a href="#certifications">{Translation[lang].navigation[2]}</a>
                <a href="#project">{Translation[lang].navigation[3]}</a>
                <div class="flex gap-3">
                    <button
                        on:click={switchTheme}
                        class={`border-2 ${dark ? "border-white" : "border-gray-600"} transition duration-1000 ease-out p-3 rounded box-border h-12 flex justify-center items-center`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class={`w-6 h-6 ${
                                dark ? "text-white" : "text-main"
                            } transition duration-1000 ease-out`}
                        >
                            <path
                                fill-rule="evenodd"
                                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                    <div>
                        <button
                            class={`border-2 ${dark ? "border-white" : "border-gray-600"} transition duration-1000 ease-out h-12 w-36 py-2 rounded flex gap-2 items-center justify-center`}
                            on:click={() => switchLang(Translation[lang].language[1])}
                        >
                            <span>{Translation[lang].language[0]}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M9 2.25a.75.75 0 01.75.75v1.506a49.38 49.38 0 015.343.371.75.75 0 11-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 01-2.969 6.323c.317.384.65.753.998 1.107a.75.75 0 11-1.07 1.052A18.902 18.902 0 019 13.687a18.823 18.823 0 01-5.656 4.482.75.75 0 11-.688-1.333 17.323 17.323 0 005.396-4.353A18.72 18.72 0 015.89 8.598a.75.75 0 011.388-.568A17.21 17.21 0 009 11.224a17.17 17.17 0 002.391-5.165 48.038 48.038 0 00-8.298.307.75.75 0 01-.186-1.489 49.159 49.159 0 015.343-.371V3A.75.75 0 019 2.25zM15.75 9a.75.75 0 01.68.433l5.25 11.25a.75.75 0 01-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 01-1.36-.634l5.25-11.25A.75.75 0 0115.75 9zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</header>
