import { Button } from "@/components/ui/button";
import { TextArea } from "@/components/ui/textarea";
import { TextField, TextFieldRoot } from "@/components/ui/textfield";
import type { Component } from "solid-js";
import { createEffect, createSignal, on, onMount } from "solid-js";
import { generateToken } from "./token-generator.models";
import { SwitchCard } from "@/components/ui/switch";
import { NumberField, NumberFieldDecrementTrigger, NumberFieldIncrementTrigger, NumberFieldGroup, NumberFieldLabel, NumberFieldInput } from "@/components/ui/number-field";
import { Label } from "@/components/ui/label";
import { SliderLabel, SliderTrack, SliderValueLabel, SliderThumb, SliderFill } from "@/components/ui/slider";
import { Slider } from "@/components/ui/slider";

export const TokenGenerator: Component<{ data: { title: string, description: string } }> = (props) => {
  const [getLength, setLength] = createSignal<number>(64);
  const [getTokenCount, setTokenCount] = createSignal<number>(1);
  const [getWithUppercase, setWithUppercase] = createSignal<boolean>(true);
  const [getWithLowercase, setWithLowercase] = createSignal<boolean>(true);
  const [getWithNumbers, setWithNumbers] = createSignal<boolean>(true);
  const [getWithSymbols, setWithSymbols] = createSignal<boolean>(false);
  const [getTokens, setTokens] = createSignal<string[]>(buildTokens());

  function buildTokens() {
    return Array.from(
      { length: getTokenCount() }, 
      () => generateToken({
      length: getLength(),
      withUppercase: getWithUppercase(),
      withLowercase: getWithLowercase(),
      withNumbers: getWithNumbers(),
      withSymbols: getWithSymbols(),
    }));
  }

  const refreshTokens = () => {
    setTokens(buildTokens());
  }

  const getRowCount = () => {
    const tokenCount = getTokenCount();

    if(tokenCount < 10) {
      return tokenCount;
    }

    return 10;
  }

  createEffect(
    on([getWithUppercase, getWithLowercase, getWithNumbers, getWithSymbols, getLength, getTokenCount], () => refreshTokens())
  );

  const copyTokens = () => {
    navigator.clipboard.writeText(getTokens().join("\n"));
  }

  return <div>
      <TextFieldRoot class="w-full mb-4 mt-12">
        <TextArea value={getTokens().join("\n")} placeholder="Tokens will appear here" rows={getRowCount()} class="text-center font-mono" autoResize />
      </TextFieldRoot>

      <div class="flex justify-center gap-2 mb-8">
        <Button variant="outline" onClick={refreshTokens} class="gap-2">
          <div class="i-tabler-refresh size-4 text-muted-foreground" />
          Refresh
        </Button>
        <Button onClick={copyTokens} class="gap-2" >
          <span class="i-tabler-copy size-4 text-muted" />
          Copy
        </Button>
      </div>

<Label>Token length</Label>
      <div class="flex flex-row gap-8 items-center mb-4">

   


      <TextFieldRoot class="max-w-160px my-2">
          <NumberField value={getLength()} onRawValueChange={(value) => setLength(value)} >
			<NumberFieldGroup>
				<NumberFieldDecrementTrigger aria-label="Decrement" />
				<NumberFieldInput />
				<NumberFieldIncrementTrigger aria-label="Increment" />
			</NumberFieldGroup>
       </NumberField>
        </TextFieldRoot>

        <Slider
      minValue={1}
      maxValue={512}
      class="flex-1"
      value={[Math.min(512, Math.max(1, getLength()))]}
      onChange={(value) => setLength(value[0])}
    >
      <SliderTrack>
        <SliderFill />
        <SliderThumb />
        <SliderThumb />
      </SliderTrack>
    </Slider>
      </div>

<Label>Character set</Label>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 my-2">
      <SwitchCard label="Uppercase" description="Include uppercase letters" checked={getWithUppercase()} onChange={setWithUppercase} />
      <SwitchCard label="Lowercase" description="Include lowercase letters" checked={getWithLowercase()} onChange={setWithLowercase} />
      <SwitchCard label="Numbers" description="Include numbers" checked={getWithNumbers()} onChange={setWithNumbers} />
      <SwitchCard label="Symbols" description="Include symbols" checked={getWithSymbols()} onChange={setWithSymbols} />
      </div>
  </div>;
};
