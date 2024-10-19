import { Typography } from '@mui/material';
import React from 'react'

const ReviewRuleDetails = ({ ruleInfo, ruleConditions }) => {
  return (
    <div>
        <Typography variant='v6'>ReviewRuleDetails</Typography> 
        
        <Typography>Rule Name: {ruleInfo.ruleName}</Typography>

        <Typography variant="h6">Review Conditions</Typography>
{Array.isArray(ruleConditions.conditions) ? (
  ruleConditions.conditions.map((condition, index) => (
    <Typography key={index} variant="body2">
      {`Field: ${condition.field}, Condition: ${condition.condition}, Value: ${condition.value}`}
    </Typography>
  ))
) : (
  <Typography variant="body2">No conditions available</Typography>
)}

        </div>
  )
}
export default ReviewRuleDetails;