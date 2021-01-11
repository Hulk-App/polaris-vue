PCard example:

```vue
<PCard>
  View a summary of your online store’s performance.
</PCard>
```

Sectioned Card
```vue
<PCard sectioned>
  View a summary of your online store’s performance.
</PCard>
```

Card with inline Header (Title and description)
```vue
<PCard sectioned title="Online store dashboard" shortDescription="Store performance">
  View a summary of your online store’s performance.
</PCard>
```

Card with subdued
```vue
<PCard subdued sectioned title="Card title" shortDescription="Tag line">
  Card content
</PCard>
```

Card with multiple sections
```vue
  <PCard title="Online store dashboard" sectioned>
    <PCardSection title="Reports">
      <p>View a summary of your online store’s performance.</p>
    </PCardSection>

    <PCardSection title="Summary" subdued>
      <p>
        View a summary of your online store’s performance, including sales,
        visitors, top products, and referrals.
      </p>
    </PCardSection>
  </PCard>
```

Card with sub-sections
```vue
  <PCard title="Customer" sectioned>
    <PCardSection>
      John Smith
    </PCardSection>
    <PCardSection title='address'>
      <PCardSubsection>
          123 First St <br/>
          Somewhere <br/>
          The Universe <br/>
      </PCardSubsection>
      <PCardSubsection>
          123 First St <br/>
          Somewhere <br/>
          The Universe <br/>
      </PCardSubsection>
    </PCardSection>
    <PCardSection>
      A single subsection without a sibling has no visual appearance
    </PCardSection>
  </PCard>
```