<template>
    <div>
        <div class="Polaris-Filters">
            <div class="Polaris-Filters-ConnectedFilterControl__Wrapper">
                <div class="Polaris-Filters-ConnectedFilterControl Polaris-Filters-ConnectedFilterControl--right">
                    <PFilterItemWrapper position="center">
                        <PTextField id="Polaris-Input-Filter" :value="inputFilter" connected labelHidden showPrefix showClearButton :placeholder="resourceTitle" v-on="$listeners">
                            <PIcon source="SearchMinor" slot="prefix" />
                        </PTextField>
                    </PFilterItemWrapper>
                    <PFilterItemWrapper v-if="$slots.hasOwnProperty('default')" position="right">
                        <!-- @slot Filter content -->
                        <slot />
                    </PFilterItemWrapper>
                </div>
            </div>
            <div class="Polaris-Filters__TagsContainer">
                <PTag v-for="(filter, key) in appliedFilters" :key="key" v-on="$listeners" removable :tag="filter"></PTag>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { classNames, variationName } from '@/utilities/css';
import { PTextField } from '@/components/PTextField';
import { PIcon } from '@/components/PIcon';
import { PTag } from '@/components/PTag';
import PFilterItemWrapper from '@/components/PFilter/components/PFilterItemWrapper.vue';

interface AppliedFiltersInterface {
    value: string;
    key: string;
}

@Component({
    components: {
        PTextField, PIcon, PTag, PFilterItemWrapper,
    },
})
export default class PFilter extends Vue {

    /**
     * Title or placeholder for the element
     */
    @Prop({type: String, default: 'Filter'}) public resourceTitle!: string;

    /**
     * Add default value to filter
     */
    @Prop({type: String, default: null}) public inputFilter!: string;

    /**
     * Applied filters which are rendered as tags.
     * The remove callback is called with respective key
     */
    @Prop({type: Array, default: Array}) public appliedFilters!: AppliedFiltersInterface[];

    public get prefix() {

        return `${this.resourceTitle.toLowerCase()}`;
    }
}
</script>
