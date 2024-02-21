import React from 'react'

function Body() {
  return (
    <div className="p-24">

    <p className='text-sm leading-7'>PERSONAL FINANCE  |  FEBRUARY 8, 2024</p>

    <h1 className="text-5xl border-t-5 font-bold">2024 Key Financial Numbers That You Need to Know</h1>
    <br/>

      <p className="text-lg leading-7 justify">
      Retirement contribution limits, tax rates, and more information to keep in mind throughout 2024.
      </p>

      <img src='/images/poster.png' alt="Poster" className="mt-4 w-full" />
      <br/>
      <br/>
      <br/>
      <br/>
    <h3 className='text-4xl text-sherif text-pretty hover:text-balance border-t-2 border-blue-100 pt-10'>Key Insights</h3>
    <ul className="list-disc mt-4 p-8 ">
        <li>2024 contribution limits for retirement accounts have increased—including 401(k)s, 403(b)s, and Traditional, Roth, and SIMPLE IRAs.</li>
        <li>Reduced tax rates that were introduced in 2018 will remain in effect through 2025.</li>
        <li>Annual retirement benefit amounts for Social Security are about 55% higher if taken at age 70 rather than starting them when eligible at age 62.</li>
      </ul>
      <br/>
      <br/>

{/*Retirement Plan Deferral Limits */}

    <h4 className='text-3xl border-t-5 text-sherif text-pretty hover:text-balance border-t-2 border-blue-100 pt-10'>Retirement Plan Deferral Limits</h4>
    <br/>
    <div className="flex justify-center">
        <div style={{ width: '80%', maxWidth: '1200px' }}>
          <script src="//my.visme.co/visme-embed.js"></script>
          <iframe
            id="embedded-project-iframe"
            src="//my.visme.co/_embed/3197px0q-new-project"
            width="100%"
            height="650px" // Adjust the height as needed
            style={{ border: '0' }}
          ></iframe>
        </div>
      </div>

    <div className="flex justify-center mt-5">
        <table className="border-collapse border border-gray-400">
          <thead>
            <tr className="bg-cyan-300">
              <th className="border border-gray-400 p-4">Plan</th>
              <th className="border border-gray-400 p-4">Under Age 50</th>
              <th className="border border-gray-400 p-4">Age 50 and Over</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-center'>
              <td className="border border-gray-400 p-4">401(k), 403(b), SAR-SEP, 457(b), TSP</td>
              <td className="border border-gray-400 p-4">$23,000 ($22,500 for 2023)</td>
              <td className="border border-gray-400 p-4">$30,500 ($30,000 for 2023)</td>
            </tr>
            <tr className='text-center'>
              <td className="border border-gray-400 p-4">Traditional and Roth IRAs</td>
              <td className="border border-gray-400 p-4">$7,000 ($6,500 for 2023)</td>
              <td className="border border-gray-400 p-4">$8,000 ($7,500 for 2023)</td>
            </tr>
            <tr className='text-center'>
              <td className="border border-gray-400 p-4">SIMPLE IRA and SIMPLE 401(k)</td>
              <td className="border border-gray-400 p-4">$16,000 ($15,500 for 2023)</td>
              <td className="border border-gray-400 p-4">$19,500 ($19,000 for 2023)<br/> <div className='color-red'>There is a typo on the website</div></td>

            </tr>
          </tbody>
        </table> </div>
        <br/>

        <p className='text-sm text-gray-800 justify-center text-justify'>The limit for 401(k), 403(b), governmental 457(b), and TSP (Thrift Savings Plan) plans includes pretax and designated Roth 
        contributions. (Roth contributions are not permitted for SARSEP and nongovernmental 457(b) plans.) The limit for all 457(b) 
        plans also includes employer contributions. The limit on total additions (including employer contributions) to defined contribution 
        plans other than 457(b) plans is $69,000 ($66,000 for 2023). 2Individual plan limits may be lower. Plans may also allow non-Roth 
        after-tax contributions above these amounts. Catch-up contributions for employees age 50 and over do not apply to nongovernmental 457(b) 
        plans.</p>


{/*Income Limits for Roth IRA Contributions */}
<br/>  <br/>
<h4 className='text-3xl border-t-5 text-sherif text-pretty hover:text-balance border-t-2 border-blue-100 pt-10'>Income Limits for Roth IRA Contributions</h4>
    <br/>
    <div className="flex justify-center">
        <div style={{ width: '80%', maxWidth: '1200px' }}>
          <script src="//my.visme.co/visme-embed.js"></script>
          <iframe
            id="embedded-project-iframe"
            src="//my.visme.co/_embed/3197xn1e-new-project"
            width="100%"
            height="650" // Adjust the height as needed
            style={{ border: '0' }}
          ></iframe>
        </div>
      </div>

        <p className='text-sm text-gray-800 justify-center justify-content text-justify'>There are no income limits for converting Traditional IRA assets to a Roth IRA. 
        For married taxpayers filing separately: If you did not live with your spouse at any time during the tax year, see the “single” 
        filing status. Otherwise, your eligibility is phased out between modified adjusted gross income (MAGI) of $0 and $10,000. 5This 
        amount refers to the taxpayer’s MAGI, which does not include amounts that were converted.</p>


{/*Income Limits for Roth IRA Contributions */}
<br/>  <br/>

<h4 className='text-3xl border-t-5 text-sherif text-pretty hover:text-balance border-t-2 border-blue-100 pt-10'>Income Limits (MAGI) for Traditional IRA Deductibility</h4>
    <br/>

    <div className="flex justify-center mt-5">
        <table className="border-collapse border border-gray-400">
          <thead>
            <tr className="bg-cyan-300">
              <th className="border border-gray-400 p-4">Filing Status</th>
              <th className="border border-gray-400 p-4">Status</th>
              <th className="border border-gray-400 p-4">Deductibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-4" rowSpan={2}>Single or Head of Household</td>
              <td className="border border-gray-400 p-4">Not eligible to participate in an employer retirement plan</td>
              <td className="border border-gray-400 p-4"> employer retirement plan	Full</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-4">Eligible to participate in an employer retirement plan</td>
              <td className="border border-gray-400 p-4">Phased out: $77,000–$87,000 ($73,000–$83,000 for 2023)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-4" rowSpan={3}>Married Filing Jointly</td>
              <td className="border border-gray-400 p-4">Neither you nor your spouse is eligible to participate in an employer retirement plan</td>
              <td className="border border-gray-400 p-4">Full</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-4">You are not eligible to participate in an employer retirement plan, but your spouse is eligible</td>
              <td className="border border-gray-400 p-4">Phased out: $230,000–$240,000 ($218,000–$228,000 for 2023)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-4">You are eligible to participate in an employer retirement plan</td>
              <td className="border border-gray-400 p-4">Phased out: $123,000–$143,000 ($116,000–$136,000 for 2023)</td>
            </tr>
          </tbody>
        </table> </div>
        <br/>

        <p className='text-sm text-gray-800 justify-center justify-content text-justify'>Workers with high income levels are not precluded from contributing to a Traditional IRA—the limits only 
        apply to determining whether that contribution is deductible. Consult IRS rules or a tax professional if your status is married filing separately 
        or qualifying widow(er).</p>



{/*High-Deductible Health Plans (HDHPs)/Health Savings Accounts (HSAs) */}
<br/>  <br/>

<h4 className='text-3xl border-t-5 text-sherif text-pretty hover:text-balance border-t-2 border-blue-100 pt-10'>High-Deductible Health Plans (HDHPs)/Health Savings Accounts (HSAs)</h4>
    <br/>

    <div className="flex justify-center mt-5">
        <table className="border-collapse border border-gray-400">
          <thead>
            <tr className="bg-cyan-300">
              <th className="border border-gray-400 p-4"></th>
              <th className="border border-gray-400 p-4">HSA CONTRIBUTION LIMITS UNDER AGE 55</th>
              <th className="border border-gray-400 p-4">AGE 55 AND OVER</th>
              <th className="border border-gray-400 p-4">Minimum Deductibles</th>
              <th className="border border-gray-400 p-4">Out-of-Pocket Maximums</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-center'>
              <td className="border border-gray-400 p-4">Individuals With Self-Only HDHP Coverage</td>
              <td className="border border-gray-400 p-4">$4,150</td>
              <td className="border border-gray-400 p-4"> $5,150</td>
              <td className="border border-gray-400 p-4">$1,600</td>
              <td className="border border-gray-400 p-4"> $8,050</td>
            </tr>
            <tr className='text-center'>
              <td className="border border-gray-400 p-4">Individuals With Family HDHP Coverage</td>
              <td className="border border-gray-400 p-4">$8,300</td>
              <td className="border border-gray-400 p-4"> $9,300</td>
              <td className="border border-gray-400 p-4">$3,200</td>
              <td className="border border-gray-400 p-4">$16,100</td>
            </tr>
          </tbody>
        </table> </div>
        <br/>

        <div className="flex justify-center mt-5">
        <table className="border-collapse border border-gray-400">
          <thead>
            <tr className="bg-cyan-300">
              <th className="border border-gray-400 p-4">Annual Gift Exclusion</th>
              <th className="border border-gray-400 p-4">Lifetime Gift and Estate Exclusion</th>
              <th className="border border-gray-400 p-4">529 Five-Year Forward Averaging</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-center'>
              <td className="border border-gray-400 p-4">Each individual can gift $18,000 this year ($17,000 for 2023) per recipient without gift tax.</td>
              <td className="border border-gray-400 p-4">Federal estate tax rate maximum is 40%. Gifts over the annual gift tax exclusion amount are counted against the $13,6100,0008 ($12,920,000 for 2023) unified lifetime gift and estate tax exclusion amount. State estate tax rates and structures may vary.</td>
              <td className="border border-gray-400 p-4"> Each individual can contribute up to $90,000 (i.e., $18,000 annual gift tax exclusion amount times five) per beneficiary and “average” it for gift tax exclusion over five years, making no additional gifts to that beneficiary during that time.</td>
            </tr>
          </tbody>
        </table> </div> <br/>
        <p className='text-sm text-gray-800 justify-center justify-content text-justify'>Unused portions of predeceasing spouse’s exclusion amount may be used by surviving spouse.</p>



{/*Income Tax Rates */}
<br/>  <br/>

<h4 className='text-3xl border-t-5 text-sherif text-pretty hover:text-balance border-t-2 border-blue-100 pt-10'>Income Tax Rates</h4>
    <br/>
    <div className="flex justify-center mt-5">
        <table className="border-collapse border border-gray-400">
          <thead>
            <tr className="bg-cyan-300">
              <th className="border border-gray-400 p-4" rowSpan={1}>Marginal Tax Rate</th>
              <th className="border border-gray-400 p-4" colSpan={2}>Taxable Income ($)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-center'>
              <td className="border border-gray-400 p-4"></td>
              <th className="border border-gray-400 p-4">Single</th>
              <th className="border border-gray-400 p-4">Married Filing Jointly and Qualifying Widow(er)s</th>
            </tr>
            <tr className='text-center'>
              <td className="border border-gray-400 p-4">10%</td>
              <td className="border border-gray-400 p-4">$0–$11,600</td>
              <td className="border border-gray-400 p-4"> $0–$23,220</td>
            </tr>
            <tr className='text-center'>
              <td className="border border-gray-400 p-4">12%</td>
              <td className="border border-gray-400 p-4">$11,601–$47,150</td>
              <td className="border border-gray-400 p-4"> $23,221–$94,300</td>
            </tr>
            <tr className='text-center'>
              <td className="border border-gray-400 p-4">22%</td>
              <td className="border border-gray-400 p-4">$47,151–$100,525</td>
              <td className="border border-gray-400 p-4"> $94,301–$201,050</td>
            </tr>
            <tr className='text-center'>
              <td className="border border-gray-400 p-4">24%</td>
              <td className="border border-gray-400 p-4">$100,526–$191,950</td>
              <td className="border border-gray-400 p-4">$201,051–$383,900</td>
            </tr>
            <tr className='text-center'>
              <td className="border border-gray-400 p-4">32%</td>
              <td className="border border-gray-400 p-4">$191,951-$243,725</td>
              <td className="border border-gray-400 p-4"> $383,901–$487,450</td>
            </tr>
            <tr className='text-center'>
              <td className="border border-gray-400 p-4">35%</td>
              <td className="border border-gray-400 p-4">$243,726–$609,350</td>
              <td className="border border-gray-400 p-4"> $487,451–$731,200</td>
            </tr>
            <tr className='text-center'>
              <td className="border border-gray-400 p-4">37%</td>
              <td className="border border-gray-400 p-4">$609,351 and Over</td>
              <td className="border border-gray-400 p-4"> $731,201 and Over</td>
            </tr>
          </tbody>
        </table> </div>
        <br/>


        <p className='text-sm text-gray-800 justify-center justify-content text-justify'>Certain individuals may also be subject to a 3.8% net investment income tax and a 0.9% additional Medicare tax.
        Generally, adjusted gross income minus deductions. Standard deduction amounts are $14,600 (single filers) and $29,200 (joint filers). Long-term capital gains/qualified dividends 
        rate: A 0% rate applies to taxpayers with taxable income not over $47,025 (single filers) and $94,050 (joint filers). A 15% rate applies to taxpayers with taxable 
        income not over $518,900 (single filers) and $583,750 (joint filers). A 20% rate applies to taxpayers with taxable income above those levels. 
        Gains on assets held for more than 1 year are realized by owner sale. Assets held for 1 year or less are short-term gains subject to ordinary income tax.</p>
    </div>
  )
}

export default Body
