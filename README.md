# Optimizely Audience Segment Builder
Simple implementation of the Custom Analytics ~~Integration~~ Extension that builds visitors segments based on the selected Optimizely audiences. Custom attributes are used for the segmentation.

## Instructions

1. Create a new Custom Anaytics ~~Integration~~ Extension using the code sample provided in this repository and add it to an experiment using audiences you want to use for segmenting the results of your experiments. You can either use the provided JSON file or create the extension via the app UI and use the JS file with the code.
2. Remember you'll need a matching custom attribute for every audience you want to use for segmentation. **Custom attribute API** name should match the **audience ID**.
3. That's it. Enjoy!

## Resources

* Link to the documentation about Custom Analytics ~~Integrations~~ Extensions: https://help.optimizely.com/Integrate_Other_Platforms/Custom_analytics_integrations_in_Optimizely_X
* Link to the article about custom attributes: https://help.optimizely.com/Target_Your_Visitors/Custom_Attributes%3A_Capture_visitor_data_through_the_API_in_Optimizely_X
* How to segment resutls in Optimizely X: https://help.optimizely.com/Analyze_Results/Segment_your_results_in_Optimizely_X_Web
