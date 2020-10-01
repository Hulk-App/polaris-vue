<template>

    <div :class="className">
        <div class="Polaris-ResourceList__HeaderContentWrapper">
            <div class="Polaris-ResourceList__HeaderTitleWrapper">{{resourceHeaderTitle}}</div>
            <div class="Polaris-ResourceList__CheckableButtonWrapper" v-if="!checked">
                <PCheckableButton plain v-bind="$attrs" v-on="$listeners">{{resourceHeaderTitle}}</PCheckableButton>
            </div>
            <div class="Polaris-ResourceList__SortWrapper" v-if="sortOptions">
                <PSelect :inlineLabel="sortLabel" labelHidden :options="sortOptions" @change="$emit('sort-change', $event)"></PSelect>
            </div>
        </div>

        <div class="Polaris-ResourceList__BulkActionsWrapper" v-if="checked">
            <div class="Polaris-ResourceList-BulkActions__Group Polaris-ResourceList-BulkActions__Group--largeScreen Polaris-ResourceList-BulkActions__Group--entered">
                <div class="Polaris-ResourceList-BulkActions__ButtonGroupWrapper">
                    <PButtonGroup segmented>
                        <PCheckableButton v-bind="$attrs" :checked="checked" v-on="$listeners">{{resourceHeaderTitle}}</PCheckableButton>
                        <PBulkActionButtonWrapper :action="promotedBulkActions"></PBulkActionButtonWrapper>
                        <PBulkActionButtonWrapper>
                            <PPopover
                                    :id="popoverId"
                                    :active="bulkActionsShown"
                                    :fullWidth="false"
                                    @close="bulkActionsShown = false">
                                <template slot="activator">
                                    <PButton @click="bulkActionsShown = !bulkActionsShown">
                                        More actions
                                    </PButton>
                                </template>
                                <template slot="content">
                                    <PActionList :items="bulkActions"></PActionList>

                                </template>
                            </PPopover>
                        </PBulkActionButtonWrapper>
                    </PButtonGroup>
                </div>
                <div class="Polaris-ResourceList-BulkActions__PaginatedSelectAll" v-if="hasMore && checked">
                    <PButton @click="handleToggleSelectMore" plain v-if="!selectedMore">Select all {{count}}+ {{resourceTitle}} in your store</PButton>
                    <div v-else>
                        <span>All {{count}}+ {{resourceTitle}} in your store are selected. </span>
                        <PButton plain @click="handleToggleSelectMore">Undo</PButton>
                    </div>
                </div>
            </div>
        </div>



        <!--<div class="Polaris-ResourceList__BulkActionsWrapper" v-if="true">
            <div>
                <div class="Polaris-ResourceList-BulkActions__Group Polaris-ResourceList-BulkActions__Group&#45;&#45;largeScreen Polaris-ResourceList-BulkActions__Group&#45;&#45;entered">
                    <div class="Polaris-ResourceList-BulkActions__ButtonGroupWrapper">
                        <PButtonGroup>

                        </PButtonGroup>
                        <div class="Polaris-ButtonGroup Polaris-ButtonGroup&#45;&#45;segmented" data-buttongroup-segmented="true">
                            <div class="Polaris-ButtonGroup__Item">
                                <div class="Polaris-ResourceList-CheckableButton Polaris-ResourceList-CheckableButton__CheckableButton&#45;&#45;selectMode Polaris-ResourceList-CheckableButton__CheckableButton&#45;&#45;selected">
                                    <div class="Polaris-ResourceList-CheckableButton__Checkbox">
                                        <label class="Polaris-Choice Polaris-Choice&#45;&#45;labelHidden" for="PolarisCheckbox2">
                                        <span class="Polaris-Choice__Control">
                                            <span class="Polaris-Checkbox">
                                                <input id="PolarisCheckbox2" type="checkbox" class="Polaris-Checkbox__Input" aria-invalid="false" role="checkbox" aria-checked="true" value="">
                                                <span class="Polaris-Checkbox__Backdrop"></span>
                                                <span class="Polaris-Checkbox__Icon">
                                                    <span class="Polaris-Icon">
                                                        <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                            <path d="M8.315 13.859l-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.437.437 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                        <span class="Polaris-Choice__Label">Deselect all 2 customers</span>
                                        </label>
                                    </div>
                                    <span class="Polaris-ResourceList-CheckableButton__Label">2 selected</span>
                                </div>
                            </div>
                            <div class="Polaris-ButtonGroup__Item">
                                <div class="Polaris-ResourceList-BulkActions__BulkActionButton">
                                    <button type="button" class="Polaris-Button">
									<span class="Polaris-Button__Content">
										<span class="Polaris-Button__Text">Edit customers</span>
									</span>
                                    </button>
                                </div>
                            </div>
                            <div class="Polaris-ButtonGroup__Item">
                                <div>
                                    <div>
                                        <div class="Polaris-ResourceList-BulkActions__BulkActionButton">
                                            <button type="button" class="Polaris-Button" tabindex="0" aria-controls="Polarispopover6" aria-owns="Polarispopover6" aria-expanded="false">
											<span class="Polaris-Button__Content">
												<span class="Polaris-Button__Text">More actions</span>
												<span class="Polaris-Button__Icon">
													<div class="Polaris-Button__DisclosureIcon">
														<span class="Polaris-Icon">
															<svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
																<path d="M5 8l5 5 5-5z" fill-rule="evenodd"></path>
															</svg>
														</span>
													</div>
												</span>
											</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>-->


    </div>
</template>

<script lang="ts">

    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import { classNames } from '@/utilities/css';
    import { PButtonGroup } from '@/components/PButtonGroup';
    import { PButton } from '@/components/PButton';
    import PCheckableButton from '@/components/PResourceList/components/PCheckableButton.vue';
    import PBulkActionButtonWrapper from '@/components/PResourceList/components/PBulkActionButtonWrapper.vue';
    import { PPopover } from "@/components/PPopover";
    import { PActionList } from "@/components/PActionList";
    import ComponentHelpers from "@/ComponentHelpers";
    import {PSelect} from "@/components/PSelect";

    interface ResourceNameInterface {
        singular: string;
        plural: string;
    }

    interface BulkActionsInterface {
        content: string;
        onAction: void;
    }

    interface SortOptionsInterface {
        label: string;
        value: void;
    }

    @Component({
        components: {
            PCheckableButton, PButtonGroup, PButton, PBulkActionButtonWrapper, PPopover, PActionList, PSelect
        },
    })
    export default class PResourceListHeader extends Vue {

        @Prop({type: String, default: `PolarisPopover${ComponentHelpers.uuid()}`}) public popoverId!: string;
        @Prop({required: true, type: Object}) public resourceName!: ResourceNameInterface;
        @Prop(Object) public promotedBulkActions!: object;
        @Prop(Array) public bulkActions!: Array<BulkActionsInterface>;
        @Prop(Array) public sortOptions!: Array<SortOptionsInterface>;
        @Prop({type: String, default: 'Sort By'}) public sortLabel!: string;
        @Prop(Number) public totalCount!: number;
        @Prop(Boolean) public selectable!: boolean;
        @Prop(Boolean) public checked!: boolean;
        @Prop(Number) public checkedCount!: number;
        @Prop(Boolean) public hasMore!: boolean;
        @Prop(Boolean) public selectedMore!: boolean;
        @Prop({required: true, type: Number}) public count!: number;

        public bulkActionsShown : boolean = false;

        public get className() {

            return classNames(
                'Polaris-ResourceList__HeaderWrapper',
                this.selectable && 'Polaris-ResourceList__HeaderWrapper--hasSelect',
                this.checked && 'Polaris-ResourceList__HeaderWrapper--inSelectMode',
                this.promotedBulkActions && 'Polaris-ResourceList__HeaderWrapper--hasSort',
            );
        }

        public get resourceHeaderTitle() {

            if (!this.checked) {

                const resource = this.resourceTitle;
                return `Showing ${this.count} ${this.totalCount ? ' of ' + this.totalCount : ''} ${resource}`;
            } else if (this.checkedCount) {

                return `${this.checkedCount}${this.selectedMore?'+':''} selected`
            }
        }

        public get resourceTitle() {

            const resourceName: ResourceNameInterface = this.resourceName;
            return this.count > 1 ? resourceName.plural : resourceName.singular;
        }

        public handleToggleSelectMore() {

            this.$emit('toggle-select-more')
        }
    }
</script>