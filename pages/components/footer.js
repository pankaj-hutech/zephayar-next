import styles from './footer.module.css';
import Link from 'next/Link';
import Api1 from "../api/Api";
import { Api } from "../api/api";
import { useState, useEffect } from 'react';



function Footer() {
  const [list, setList] = useState(Api)

  // setList(Api)
  // console.log({ Api1 });
  // let list = (data) => {
  //   const xx = data.map((data) => (
  //     `${data.title}`,
  //     movie
  //   )
  //   );
  // };
  useEffect(() => {
    setList(Api)
  }, [])

  console.log(list)
  // const [api, setApi] = useState(Api1)
  // console.log(api);
  // useEffect(() => {
  //   //production api to get company details
  //   //set the data to state (api)
  // }, []);
  return (
    <div className={styles.footer}>

      {
        list.map((elem) => (
          <div>
            <b className={styles.new}>{elem.title}</b>

            {
              elem?.Subtitle?.map((elem1) => (
                <div>
                  <p>
                    <p className={styles.new}>{elem1.title}</p>

                  </p>
                </div>
              ))
              // elem.map((elm1) => (
              //   <div>{elm1.Subtitle}</div>
              // ))
            }
          </div>

        ))
      }


      {/* <div>
        <p className={styles.name1}>{list?.copy}</p>
      </div> */}

      <div>
        {/* {
              elem?.Subtitle?.map((elem1) => (
                <div>
                  <p>
                    <p className={styles.new}>{elem1.title}</p>

                  </p>
                </div>
              ))
              // elem.map((elm1) => (
              //   <div>{elm1.Subtitle}</div>
              // ))
            } */}
      </div>

    </div>
  );
}
export default Footer;