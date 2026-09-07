import React from "react";
import "./PastPublishedPapers.css";

// TODO: Fill in "title" and "author" for each entry below.
// Title/author could not be reliably auto-fetched for most DOIs
// (publisher page blocks automated access; search snippets omit bylines).
// Open each DOI link, copy the title + author list from the abstract page,
// and replace the placeholder text.
const papers = [
  {
    sno: 1,
    author: "Omvesh Yadav, Meenu Jindal, Richa Bhatt, Akul Agarwal, Bhaskar Thallada, Venkata Chandra Sekhar Palla",
    title:
      "Catalytic pyrolysis of pine needles: Role of zeolite structure and SiO2/Al2O3 ratio on bio-oil yield and product distribution",
    doi: "https://doi.org/10.1002/cjce.25453",
  },
  { sno: 2, author: "Rajvinder Kaur, Sapna Sharma, Avinash Chandra", title: "Forced convection heat transfer from confined circular/semi-circular heaters and coolers with various orientations", doi: "https://doi.org/10.1002/cjce.25439" },
  { sno: 3, author: "Mohan Jujaru, Kajol Pradhan, Shailee Gaur, Amit Jain, Sushil Kumar", title: "Generation of biosurfactants by P. aeruginosa gi |KP163922| on waste engine oil in a free and immobilized cells system", doi: "https://doi.org/10.1002/cjce.25419" },
  { sno: 4, author: "Reshma R. Devale, Yogesh S. Mahajan", title: "Transesterification reactions as a means to produce esters: A critical review", doi: "https://doi.org/10.1002/cjce.25414" },
  { sno: 5, author: "Anjali Baudh, Meenakshi Garjola, Rahul Sharma, Sweta Sharma, Rajesh Kumar Upadhyay", title: "Effect of ceria morphology on hydrogen production via methane steam reforming for membrane reformer", doi: "https://doi.org/10.1002/cjce.25396" },
  { sno: 6, author: "Vikramaditya R. Shirsat, Prakash D. Vaidya, Vishwanath H. Dalvi, Rekha S. Singhal, Anil K. Kelkar, Jyeshtharaj B. Joshi", title: "Kinetics of cashew apple drying through mechanistic models and analysis of the effects of drying conditions on the retention of bioactive compounds", doi: "https://doi.org/10.1002/cjce.25395" },
  { sno: 7, author: "Sumit S. Joshi, Vishwanath H. Dalvi, Vivek S. Vitankar, Jyeshtharaj B. Joshi, Aniruddha J. Joshi", title: "Development of new correlation for the prediction of power number for closed clearance impellers using machine learning methods trained on literature data", doi: "https://doi.org/10.1002/cjce.25385" },
  { sno: 8, author: "Md Tabrez Alam, Rajesh Kumar, Anoop K. Gupta", title: "Effects of segmentation in composite phase change material on melting/solidification performance of triplex-tube thermal energy storage systems", doi: "https://doi.org/10.1002/cjce.25378" },
  { sno: 9, author: "Sajikumar Pillai Sivasree, Baby Nitin", title: "Optimal design of coolant jacket for cryogen transfer pipelines", doi: "https://doi.org/10.1002/cjce.25368" },
  { sno: 10, author: "Tanvi Singla, Bhuvaneshvar Kumar, Sapna Sharma", title: "Mixed convective viscous dissipative flow of Casson hybrid nanofluid with variable thermal conductivity at the stagnation zone of a rotating sphere", doi: "https://doi.org/10.1002/cjce.25352" },
  { sno: 11, author: "Priya Yadav, Julie Kring, Parag R. Gogate", title: "Optimizing delignification and saccharification process for sawdust processing using a central composite design", doi: "https://doi.org/10.1002/cjce.25434" },
  { sno: 12, author: "Rajvinder Kaur, Sapna Sharma, Avinash Chandra", title: "Effects of viscous dissipation, temperature dependent thermal conductivity, and local thermal non-equilibrium on the heat transfer in a porous channel to Casson fluid", doi: "https://doi.org/10.1002/cjce.25459" },
  { sno: 13, author: "Ketaki S. Nalawade, Parag R. Gogate", title: "Understanding the effect of reaction parameters on the production of levulinic acid from glucose", doi: "https://doi.org/10.1002/cjce.25470" },
];

export default function PastPublishedPapers() {
  return (
    <section className="ppp-wrapper">
      <div className="ppp-container">
        <h1 className="ppp-heading">Past Published Papers</h1>
        <p className="ppp-subheading">
          Papers published through SDCEE in past editions.
        </p>

        <div className="ppp-table-scroll">
          <table className="ppp-table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Author</th>
                <th>Title</th>
                <th>DOI</th>
              </tr>
            </thead>
            <tbody>
              {papers.map((p) => (
                <tr key={p.sno}>
                  <td data-label="S.No.">{p.sno}</td>
                  <td data-label="Author">{p.author}</td>
                  <td data-label="Title">{p.title}</td>
                  <td data-label="DOI">
                    <a href={p.doi} target="_blank" rel="noopener noreferrer">
                      {p.doi}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}