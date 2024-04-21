<script>
    import { fly, fade } from "svelte/transition";
    import { inview } from "svelte-inview";

    import Data from "../data.json";
    import Configuration from "../configuration.json"
    import Translation from "../translation.json";

    export let lang;    
    export let dark;
    let isInView;

    let copyToClipboard = (value, index) => {
        navigator.clipboard.writeText(value);
        document.getElementById(index).style.opacity = "1";
        setTimeout(() => {
            document.getElementById(index).style.opacity = "0";
        }, 500)
    }

    let length = Configuration.certifications.startItems;
    $: viewStatus = length === 1 ? Translation[lang]['view-more'] : Translation[lang]['view-less']
    let expandLength = () => {
        length === Configuration.certifications.startItems ? length = 10 : length = Configuration.certifications.startItems;
        console.log(length)
    }
</script>
<section
    use:inview={Configuration['animation'].options}
    on:enter={() => {isInView = true}}
    class={isInView ? "opacity-100" : "opacity-0"}
    id="certifications"
>
{#key isInView}
    {#key lang}
    <h1 in:fly={Configuration['animation']['in-fly']} class="font-bold text-4xl">{Translation[lang].certification}</h1>
    {/key}
    <div in:fly={Configuration['animation']['in-fly']} class="px-5 mt-3 flex flex-col gap-2">
        {#each Data.certification.slice(0, 1) as cert, index}
            <article in:fly={Configuration['animation']['in-fly']} class="flex gap-3 items-center hover:scale-102 transition group">
                <img src={`assets/img/cert/${cert.publisher}.png`} class="w-12 h-12" alt="">
                <div class="">
                    <p class="font-bold md:text-xl">{cert.title}</p>
                    <p class="-mt-1 text-lg">{cert.publisher}</p>
                </div>
                <div class="ml-auto items-center gap-3 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out hidden lg:flex">
                    <button class={`${dark ? "border-white" : "border-gray-600"} border-2 p-2 rounded flex items-center gap-2`} on:click={() => copyToClipboard(cert.credential, index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                        </svg>                          
                        <span>{cert.credential}</span>
                        <p class="opacity-0 absolute -mt-20 -ml-1 transition duration-500 cursor-default" id={`${index}`}>Credential Copied!</p>
                    </button>
                    <a href={cert.verification} class="flex items-center gap-2 font-bold bg-secondary text-white py-2 px-3 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>                          
                        <span>Verify</span>
                    </a>
                </div>
            </article>
        {/each}
        {#key length}
            {#each Data.certification.slice(1, length) as cert, index}
                <article in:fly={Configuration['animation']['in-fly']} out:fade class="flex gap-3 items-center hover:scale-102 transition group">
                    <img src={`assets/img/cert/${cert.publisher}.png`} class="w-12 h-12" alt="">
                    <div class="">
                        <p class="font-bold md:text-xl">{cert.title}</p>
                        <p class="-mt-1 text-lg">{cert.publisher}</p>
                    </div>
                    <div class="ml-auto items-center gap-3 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out hidden lg:flex">
                        <button class={`${dark ? "border-white" : "border-gray-600"} border-2 p-2 rounded flex items-center gap-2`} on:click={() => copyToClipboard(cert.credential, index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                            </svg>                          
                            <span>{cert.credential}</span>
                            <p class="opacity-0 absolute -mt-20 -ml-1 transition duration-500 cursor-default" id={`${index}`}>Credential Copied!</p>
                        </button>
                        <a href={cert.verification} class="flex items-center gap-2 font-bold bg-secondary text-white py-2 px-3 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>                          
                            <span>Verify</span>
                        </a>
                    </div>
                </article>
            {/each}
        {/key}
        {#key lang}
        <button in:fly={Configuration['animation']['in-fly']} class="flex justify-center items-center gap-1 cursor-pointer mt-3" on:click={expandLength}>
            <span>{viewStatus}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class={`w-6 h-6 ${length !== Configuration.certifications.startItems && 'rotate-180'}`}>
                <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
            </svg>                      
        </button>
        {/key}
    </div>
    {/key}
</section>