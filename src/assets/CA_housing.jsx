import { Container, Table } from "react-bootstrap";
import CA_TabsExample from "./components/CA_tabs";
import debt_time from "./images/unnamed-1.png";
import tanked from "./images/tanked.png";
import stu from "./images/stu.png";
import HE from "./images/HE.png";
import auto from "./images/auto.png";
import imdone from "./images/imdone.png";
import omg from "./images/omg.png";

import sd from "./images/sd.png";
import la from "./images/la.png";
import sf from "./images/sf.png";
import sac from "./images/sac.png";
import tired from "./images/tired.png";
import unamed from "./images/unnamed.png";
import kaka from "./images/kaka.png";
import des from "./images/des.png";
import kala from "./images/kala.png";

import main from "./images/main-page.gif";
import dashboard from "./images/price-trend.gif";
import prediction from "./images/pred.gif";
import side from "./images/side-bar.gif";

export default function CA_Housing() {
  const overviewContent = (
    <article>
      <div className="project-img">
        <img src={main} alt="Main page" className="project-image" />
        <img src={dashboard} alt="Dashboard" className="project-image" />
        <img src={prediction} alt="Prediction" className="project-image" />
        <img src={side} alt="Side bar" className="project-image" />
      </div>

      <h2 className="project-title">Project Overview</h2>
      <p className="project-text">
        A machine learning dashboard for predicting California housing prices
        using economic indicators. This full-stack application helps
        Californians and interested residents understand housing market trends
        through interactive visualizations and data-driven predictions.
      </p>

      <h2 className="project-title">Key Features</h2>
      <ul className="project-text">
        <li>Predict housing prices with 5 economic factors</li>
        <li>Interactive price trends chart with hover tooltips</li>
        <li>Regional analysis across California counties</li>
        <li>Feature importance visualization</li>
        <li>Real-time prediction with input validation</li>
        <li>Data cleaning and preprocessing pipeline</li>
        <li>Exploratory data analysis (EDA) with statistical insights</li>
      </ul>

      <h2 className="project-title">Tech Stack</h2>
      <div className="project-text">
        <p>
          <strong>Frontend:</strong> React 19, JavaScript
        </p>
        <p>
          <strong>Backend:</strong> Flask 3.1, Python 3.13
        </p>
        <p>
          <strong>ML Model:</strong> Linear Regression (R² = 0.9521)
        </p>
        <p>
          <strong>Data Processing:</strong> Pandas, DuckDB
        </p>
        <p>
          <strong>Visualization:</strong> Matplotlib, Seaborn
        </p>
        <p>
          <strong>Additional Tools:</strong> Scikit-learn, Jupyter Notebooks,
          SQL
        </p>
      </div>

      <h2 className="project-title">Project Contributors</h2>
      <p className="project-text">
        This project is an independent extension of a collaborative Housing
        Price Analysis project completed with Alvaro Espinoza and Johnny Rosas.
      </p>
      <p className="project-text">
        <strong>Collaborative Work:</strong> Data collection, cleaning, and
        initial EDA modeling were handled as a team effort.
      </p>
      <p className="project-text">
        <strong>My Primary Contributions:</strong>
      </p>
      <ul className="project-text">
        <li>
          SQL querying and database optimization for housing data analysis
        </li>
        <li>
          Development of additional predictive models (Small Neural Network and
          Decision Trees)
        </li>
        <li>
          Full-stack application development with Flask backend and React
          frontend
        </li>
        <li>Interactive dashboard implementation with real-time predictions</li>
        <li>
          Feature engineering and model performance optimization (R² = 0.9521)
        </li>
        <li>Regional analysis and county-level data aggregation</li>
      </ul>
      <p
        className="project-text"
        style={{ fontStyle: "italic", fontSize: "0.9em" }}
      >
        Note: Some models like logistic regression, histograms, and Q-Q plots
        were primarily developed by team members. For their contributions,
        please refer to the GitHub repository <a href="https://github.com/alvaroEspinozaMerida/CA_Housing_Analysis.git" target="_blank" rel="noopener noreferrer">here</a>.
      </p>
    </article>
  );

  const technicalContent = (
    <article>
      <h2 className="project-title">Summay</h2>
      <p className="project-text">
        In this project, I focused on querying and analyzing various aspects of
        California housing data. My primary contributions involved extracting
        key metrics related to homeowner debt, housing units, population growth,
        and property taxes across different counties and cities in California. I
        utilized SQL queries to gather descriptive statistics and trends over
        time, which were then visualized to provide insights into the housing
        market dynamics within the state.
      </p>
      <h2 className="project-title">Average Total Debt by County</h2>
      <p className="project-text">
        One of the key analyses I performed involved querying the housing
        database to calculate the average total debt for homeowners in different
        counties across California. This analysis provided insights into the
        financial burdens faced by residents in various regions and helped
        identify areas with higher debt levels.
      </p>
      <div className="data-viz-container">
        <div className="data-viz-item">
          <Table striped bordered hover className="project-text data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>avg_total_debt</td>
                <td>12.378275</td>
              </tr>
              <tr>
                <td>min_total_debt</td>
                <td>6.75</td>
              </tr>
              <tr>
                <td>max_total_debt</td>
                <td>18.033</td>
              </tr>
              <tr>
                <td>stddev_total_debt</td>
                <td>2.624569</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="data-viz-item">
          <img
            src={debt_time}
            alt="Debt over time"
            className="data-viz-image"
          />
        </div>
      </div>

      <h2 className="project-title project-section-title">
        Average of Debt Features
      </h2>
      <div className="image-grid">
        <img src={tanked} alt="Tanked debt" className="image-grid-item" />
        <img src={HE} alt="Home equity debt" className="image-grid-item" />
        <img src={auto} alt="Auto debt" className="image-grid-item" />
        <img src={stu} alt="Student debt" className="image-grid-item" />
      </div>

      <h2 className="project-title project-section-title">Conclusion</h2>
      <p className="project-text">
        Total debt increased from 2000 - 2025 with dips around 2010 but
        inclining in 2020. This may be reflecting broader economic trends, and
        the incline in 2020 could be connected to the covid-19 pandemic (Note:
        more data would be needed to make this assumption). Increased borrowing
        due to housing inflation or shifts in credit. The descriptive statistics
        indicate a moderate spread in debt levels, with the standard deviation
        of 2.62 suggesting that most values cluster around the mean.
      </p>
      <ul className="project-text">
        <li>
          <strong>Mortgage Debt</strong>
        </li>
        <p>
          Mortgage debt rose until 2008, declining in 2013 and increasing since.
          Indicative of the housing crisis in 2008 and the post recovery in the
          housing market.
        </p>
        <li>
          <strong>Home Equity Debt</strong>
        </li>
        <p>
          Has an interesting trend peaking around 2009 and then declining
          significantly, only rising recently which could be tied to home equity
          and assets.
        </p>
        <li>
          <strong>Student Loan</strong>
        </li>
        <p>
          Shows a consistent upward trend from 2003-2025, suggesting a growing
          reliance on education financing and possible financial strain relating
          to work/wages not keeping up with need.
        </p>
        <li>
          <strong>Auto Loan Debt</strong>
        </li>
        <p>
          Has gradually increased with some dips, peaking around 2025. Could be
          due to rising vehicle prices or consumers have more credit
          availability.
        </p>
      </ul>
      <h2 className="project-title project-section-title">
        Housing Units Querying
      </h2>
      <div className="data-viz-container">
        <div className="data-viz-item">
          <Table striped bordered hover className="project-text data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>count</td>
                <td>2.500000e+01</td>
              </tr>
              <tr>
                <td>mean</td>
                <td>1.371222e+07</td>
              </tr>
              <tr>
                <td>std</td>
                <td>7.308634e+05</td>
              </tr>
              <tr>
                <td>min</td>
                <td>1.225097e+07</td>
              </tr>
              <tr>
                <td>25%</td>
                <td>1.333447e+07</td>
              </tr>
              <tr>
                <td>50%</td>
                <td>1.377232e+07</td>
              </tr>
              <tr>
                <td>75%</td>
                <td>1.421408e+07</td>
              </tr>
              <tr>
                <td>max</td>
                <td>1.487790e+07</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="data-viz-item">
          <img src={imdone} alt="housing units" className="data-viz-image" />
        </div>
      </div>
      <div>
        <h2 className="project-title project-section-title">Conclusion</h2>
        <p className="project-text">
          {" "}
          From 2002-2023, California has had a steady increase in housing units
          with a small dip from 2009-2011 (likely corresponding to post-recovery
          in housing market). Statistically having an average of housing units
          of 13.7 million, and a standard deviation of 730k units which is
          reasonable from year to year. From 2011-2025, it keeps steadily
          increasing indicating investment in housing infrastructure and
          construction.
        </p>
      </div>

      <h2 className="project-title project-section-title">Population Growth</h2>
      <div className="centered-image">
        <img src={omg} alt="population" className="data-viz-image" />
      </div>

      <h2 className="project-title project-section-title">Conclusion</h2>
      <p className="project-text">
        From 2000-2020, California’s population growth rate trends downwards
        starting around 1.4% and then ending at nearly 0. This could be due to
        factors not being considered by this analysis such as housing
        affordability challenges and economic shifts. There were recoveries
        around 2008-2010, but overall plot suggests slow demographic growth.
        Which could impact housing demand and labor markets.
      </p>

      <h2 className="project-title project-section-title">Property Taxes</h2>
      <div className="image-grid">
        <img src={sd} alt="sd prop tax-debt" className="image-grid-item" />
        <img
          src={la}
          alt="la prop tax equity debt"
          className="image-grid-item"
        />
        <img src={sf} alt="sf prop tax Auto debt" className="image-grid-item" />
        <img
          src={sac}
          alt="sac prop tax Student debt"
          className="image-grid-item"
        />
      </div>
      <div>
        <h2 className="project-title project-section-title">Conclusion</h2>
        <ul className="project-text">
          <li>
            <strong>San Diego Property Taxes</strong>
          </li>
          <p>
            Property taxes rose from 2003-2010, plateauing in 2010-2014 (likely
            due to the housing crisis and post recovery) but recovering greatly
            in 2014. Indicating a renewed growth in property values and tax
            base.
          </p>
          <li>
            <strong>Los Angeles Property Taxes</strong>
          </li>
          <p>
            Has a consistent upward trend. Property taxes rose from 2003-2019,
            dipping in 2011 (likely due to the housing crisis and post
            recovery). Has the highest tax volume among the cities, reflecting a
            large and valuable real estate/housing market.
          </p>
          <li>
            <strong>San Francisco Property Taxes</strong>
          </li>
          <p>
            Has steadily increased in property taxes, plateauing in 201 but
            overall increasing across years. Indicates a stable and resilient
            housing market with stable fiscal growth.{" "}
          </p>
          <li>
            <strong>Sacramento Property Taxes</strong>
          </li>
          <p>
            Property taxes rose until 2010, dipping from 2011-2014 (likely due
            to the housing crisis and post recovery) but continued increasing
            afterwards displaying recovery and expansion.{" "}
          </p>
        </ul>
      </div>
      <h2 className="project-title project-section-title">
        Median Housing Units Querying
      </h2>
      <div className="data-viz-container">
        <div className="data-viz-item">
          <Table striped bordered hover className="project-text data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>count_CA</td>
                <td>428</td>
              </tr>
              <tr>
                <td>mean_CA</td>
                <td>417058.315421</td>
              </tr>
              <tr>
                <td>std_CA</td>
                <td>216220.329607</td>
              </tr>
              <tr>
                <td>min_CA</td>
                <td>167790.0</td>
              </tr>
              <tr>
                <td>max_CA</td>
                <td>910160.0</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="data-viz-item">
          <img src={tired} alt="population" className="data-viz-image" />
        </div>
      </div>
      <div>
        <h2 className="project-title project-section-title">Conclusion</h2>
        <p className="project-text">
          From 1990-2025, California’s median home prices have shown a strong
          upward trajectory rising from about 167k to peaking at 190k, with an
          average of 417k. This however includes a huge dip from 2008-2012
          reflecting the impact of the housing market crash and its recovery
          post 2012. The standard deviation of 216k indicates moderate
          variability.
        </p>
      </div>
    </article>
  );

  const MoreContent = (
    <article>
      <h2 className="project-title">Small Neural Network</h2>
      <div className="centered-image">
        <img
          src={unamed}
          alt="Neural Network Results"
          className="data-viz-image"
        />
      </div>
      <h2 className="project-title project-section-title">Model Overview</h2>
      <p className="project-text">
        A small neural network was implemented to predict median housing values
        based on various features from the California housing dataset. The model
        architecture consisted of multiple dense layers with activation
        functions to capture non-linear relationships in the data.
      </p>
      <h2 className="project-title project-section-title">Architecture</h2>
      <ul className="project-text">
        <li>
          <strong>Input Layer:</strong> Features including median income,
          housing age, average rooms, average bedrooms, population, average
          occupancy, latitude, and longitude.
        </li>
        <li>
          <strong>Hidden Layers:</strong> Multiple dense layers with ReLU
          activation functions to learn complex patterns in the housing data.
        </li>
        <li>
          <strong>Output Layer:</strong> Single neuron with linear activation
          for predicting continuous housing values.
        </li>
      </ul>
      <h2 className="project-title project-section-title">Training Process</h2>
      <p className="project-text">
        The model was trained using backpropagation with mean squared error as
        the loss function. Data was split into training and testing sets to
        evaluate model performance. Feature scaling was applied to normalize
        input values and improve convergence during training.
      </p>
      <h2 className="project-title project-section-title">Results</h2>
      <ul className="project-text">
        <strong>
          <li>RMSE: 34371.85901646297</li>
          <li>R² score: 0.9655184809786873</li>
        </strong>
      </ul>
      <p className="project-text">
        {" "}
        The Small “Tiny” Neural Network developed for predicting median home
        prices demonstrated strong performance, with an RMSE of approximately
        34k and R2 score of 0.9655. Our model explains over 96% of the variance
        in housing prices with a relatively low average prediction error,
        meaning that we are on the right track for developing a reliable
        forecasting model. It is important to note that there are ways of
        improving the model with the addition of more detailed features such as
        accounting for high-end v.s low end housing, temporal trends for market
        fluctuations, etc. However, our model provides insight to the permanence
        of features and their impact on the housing market. Highlighting the
        potential of our network and providing us with next courses of action.
      </p>
      <h2 className="project-title project-section-title">
        Feature Importance
      </h2>
      <div className="centered-image">
        <img
          src={kaka}
          alt="Neural Network permanence importance"
          className="data-viz-image"
        />
      </div>
      <p className="project-text">
        Feature importance analysis revealed that CA_lag1, which is a lagged
        regional price indicator or debt carried over from the previous month,
        was the most influential feature. Indicating that it is a critical
        feature in order to develop an accurate model, and reflective of pricing
        trends. We had not considered debt lag before this, so we will
        definitely be working on expanding and including more lag into the
        model. Secondary features of importance were Auto Loans, HE Revolving,
        and Population reflecting economic and demographic factors. In contrast,
        Credit Card debt and Units did not contribute as much indicating that it
        has less predictive power than we thought. As aforementioned, there are
        ways we can improve our model, however the results validate the neural
        network and provide a strong foundation for enhancing predictive power.
      </p>
    </article>
  );

  const YayContent = (
    <article>
      <h2 className="project-title">Decision Trees</h2>
      <div className="centered-image">
        <img
          src={des}
          alt="Neural Network permanence importance"
          className="data-viz-image"
        />
      </div>
      <p className="project-text"></p>
      <p className="project-text">
        Decision Trees were implemented to model the relationship between
        various housing features and median home prices. The decision tree model
        was trained on the California housing dataset, utilizing features such
        as debt, housing units, population, and property taxes to predict median
        housing values.
      </p>

      <h2 className="project-title project-section-title">Model Overview</h2>
      <p className="project-text">
        The decision tree model was constructed using a series of binary splits
        based on feature values. Each node in the tree represents a decision
        point, where the data is divided based on the value of a specific
        feature. The leaves of the tree represent the predicted median housing
        values.
      </p>
      <h2 className="project-title project-section-title">Training Process</h2>
      <p className="project-text">
        The model was trained using the CART (Classification and Regression
        Trees) algorithm, optimizing for mean squared error to minimize
        prediction error. The dataset was split into training and testing sets
        to evaluate model performance.
      </p>
      <h2 className="project-title project-section-title">Results</h2>
      <ul className="project-text">
        <strong>
          <li>MSE: 0.02642183817776466</li>
          <li> R2 Score: 0.9771180866195417</li>
        </strong>
      </ul>
      <p className="project-text">
        In addition to the “Tiny” Neural Network, we made a Decision Tree
        regression model trained to predict median home pieces as well. We
        gained better results with the decision tree, yielding an R2 score of
        0.9771 and an MSE of 0.0264. Suggesting that the decision tree
        outperformed the neural network in terms of error minimization. However,
        it displays a main split at Mortgage, followed by unis and CA_lag.
        Indicating a stronger reliance on financial obligations (debt) and
        housing density. It also drastically differs from the results of our
        neural network which indicated CA_lag as the most critical feature but
        stays consistent with having debt features such as Credit Card, Student
        Loan, etc having minimal impact.
      </p>
      <h2 className="project-title project-section-title">
        Feature Importance
      </h2>
      <div className="centered-image">
        <img
          src={kala}
          alt="Decision Tree Feature Importance"
          className="data-viz-image"
        />
      </div>
      <p className="project-text">
        Supported by feature importance analysis, we can see that Mortgage
        greatly outweighs other features followed by units and CA_lag1. The
        other results made us question the validity of the model, especially
        since the results were different from neural. However we determined that
        both models (network and tree) were underscoring their respective
        feature prioritizations. Our neural network capturing complex non linear
        relationships (shown in more distributed feature importance) and our
        decision tree is driven by financial drives and rule based segmentation.
        Overall, offering us strong generalization and possible forecasting,
        rule based segmentation, clearer understanding of how features interact
        with each other and their impact outside of noise.
      </p>
    </article>
  );

  return (
    <div className="project-app">
      <div className="project-container">
        <h1 className="project-main-title">
          California Housing Data Analysis - Full Stack Application
        </h1>
        <p className="project-subtitle">
          This project involved analyzing California housing data to uncover
          trends and insights that could inform real estate decisions.
        </p>
        <p className="project-subtitle">
          GitHub:{" "}
          <a
            href="https://github.com/KWATER2352/predict-housing-dash.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            California Housing Repository
          </a>
        </p>
      </div>

      <Container className="project-content">
        <CA_TabsExample
          overviewContent={overviewContent}
          technicalContent={technicalContent}
          moreContent={MoreContent}
          yayContent={YayContent}
        />
      </Container>
    </div>
  );
}


