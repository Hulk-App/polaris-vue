import PCard from './PCard';
import PCardSection from './PCardSection';
import {PList} from '../PList';
import {PListItem} from '../PList';
import {PButtonGroup} from '../PButtonGroup';
import {PButton} from '../PButton';
import {PPopover} from '../PPopover';
import {PActionList} from '../PActionList';
import {PCardHeader} from './index';
import {PTextContainer} from '../PTextContainer';
import {PResourceList} from '../PResourceList';
import {PResourceListItem} from '../PResourceList';
import {PStack} from '../PStack';
import {PStackItem} from '../PStack';
import {POptionList} from '../POptionList';

export default {
    title: 'Structure / Card',
    component: PCard,
    argTypes: {
        default: {
            table: {
                disable: true,
            },
        },
        footer: {
            table: {
                disable: true,
            },
        },
        title: {
            control: {
                type: 'text',
            },
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        short_description: {
            table: {
                disable: true,
            },
        },
        actions: {
            control: {
                type: 'array',
            },
            table: {
                type: {
                    summary: 'array',
                },
            },
        },
        children: {
            table: {
                disable: true,
            },
        },
    },
}

const Template = (arg, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {
        PCard,PCardHeader,PCardSection
    },
    template: `
      <PCard v-bind="$props">
      <PCardHeader
          title="Sales"
          shortDescription="Sales Report"
          :actions="[
          {
            content: 'Total Sales',
            to: '/to-route',
          },
      ]">
      </PCardHeader>
        <PCardSection>
          View a summary of your online store’s performance.
        </PCardSection>
      </PCard>`,
});

export const Card = Template.bind({});

Card.args = {
    sectioned: false
}

const Template1 = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {
        PCard, PCardSection, PList, PListItem, PCardHeader
    },
    template: `
      <PCard v-bind="$props">
          <PCardHeader title="Products"></PCardHeader>
          <PCardSection>
            <PList>
              <PListItem>Samsung</PListItem>
              <PListItem>Apple</PListItem>
            </PList>
          </PCardSection>
    
          <PCardSection :subdued="subdued" title="New Products">
            <PList>
              <PListItem>Google</PListItem>
              <PListItem>Oneplus</PListItem>
            </PList>
          </PCardSection>
      </PCard>`,
});

export const CardWithSubdued = Template1.bind({});

CardWithSubdued.args = {
    subdued: true,
}

const Template2 = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {
        PCard, PCardHeader, PPopover, PButton, PButtonGroup, PActionList, PCardSection, PTextContainer, PResourceList,
        PResourceListItem, PStack, PStackItem, PList, PListItem, POptionList
    },
    data() {
        return {
            statusFilterActive: false,
            items: [
                {
                    id: 1,
                    sales: 'Orders',
                    amount: 'USD$0.00',
                    url: 'reports/orders',
                },
                {
                    id: 2,
                    sales: 'Returns',
                    amount: '-USD$250.00',
                    url: 'reports/returns',
                },
            ],
        };
    },
    template: `
      <PCard v-bind="$props">
      <PCardHeader
          title="Sales"
          shortDescription="Sales Report"
          :actions="[
          {
            content: 'Total Sales',
            onAction: handleActionClick,
          },
      ]"
          v-slot:children
      >
        <PPopover
            :active="statusFilterActive"
            preferredAlignment="right"
            @close="statusFilterActive = false"
        >
          <PButton
              slot="activator"
              plain
              :disclosure="statusFilterActive ? 'up' : 'down'"
              @click.stop="statusFilterActive = !statusFilterActive"
          >
            Status
          </PButton>
          <PActionList slot="content"
                       :items="[
              {
                content: 'Gross Sales'
              },
              {
                content: 'Net Sales'
              }
          ]"
          />
        </PPopover>
      </PCardHeader>

      <PCardSection>
        <PTextContainer>
          You can use sales reports to see information about your customers’ orders
          based on criteria such as sales over time, by channel, or by staff.
        </PTextContainer>
      </PCardSection>

      <PCardSection title="Total Sales Breakdown">
        <PResourceList
            :resource-name="{singular: 'Sale', plural: 'Sales'}"
            :hideFilters="false"
        >
          <PResourceListItem
              v-for="(item, key) in items"
              :key="key"
              :id="item.id"
          >
            <PStack>
              <PStackItem fill>{{ item.sales }}</PStackItem>
              <PStackItem>{{ item.amount }}</PStackItem>
            </PStack>
          </PResourceListItem>
        </PResourceList>
      </PCardSection>

      <PCardSection title="Deactivated reports" subdued>
        <PList>
          <PListItem>Payouts</PListItem>
          <PListItem>Total Sales By Channel</PListItem>
        </PList>
      </PCardSection>

      <PCardSection title="Note">
        <PTextContainer>
          The sales reports are available only if your store is on the Shopify plan
          or higher.
        </PTextContainer>
      </PCardSection>

      <PButtonGroup slot="footer">
        <PButton @click="handleSecondaryButton">Dismiss</PButton>
        <PButton primary @click="handlePrimaryButton">Export Report</PButton>
      </PButtonGroup>
      </PCard>`,
    methods: {
        handleActionClick() {
            alert('Total Sales');
        },
        handleSecondaryButton() {
            alert('Dismiss');
        },
        handlePrimaryButton() {
            alert('Export Report');
        },
    },
});

export const AllElements = Template2.bind({});

AllElements.args = {
    subdued: true,
    actions: []
}
