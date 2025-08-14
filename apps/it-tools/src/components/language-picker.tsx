import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import type { DropdownMenuSubTriggerProps } from "@kobalte/core/dropdown-menu";
import { languages } from "@/i18n/languages";
import { navigate } from "astro:transitions/client";

export const LanguagePicker = () => {


    
    return (
        <DropdownMenu placement="bottom">
        <DropdownMenuTrigger
                    as={(props: DropdownMenuSubTriggerProps) => (
                        <Button variant="ghost" size="icon" {...props}>
                            <span class="i-tabler-language flex-shrink-0 size-4"></span>
                        </Button>
                    )}
                />
        <DropdownMenuContent class="w-42">
            {Object.entries(languages).map(([locale, name]) => (
                <DropdownMenuItem as="a" href={`/${locale}`}>
                    {name}
                </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
    </DropdownMenu>
           
    )
}