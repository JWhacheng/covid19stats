import React from 'react';
import { formatDistanceToNow, format } from 'date-fns';
import useStats from '../hooks/useStats';
import { COVID_URL } from '../api';

const Footer = () => {
  const [data, , error] = useStats(COVID_URL);

  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_content">
          <span>Última actualización:&nbsp;</span>
          {data?.lastUpdate && (
            <>
              <span>
                {format(new Date(data?.lastUpdate), "dd/MM/yyyy - hh:mm a")}&nbsp;
              </span>
              <span>&nbsp;({formatDistanceToNow(new Date(data?.lastUpdate))})</span>
            </>
          )}
        </div>
        <div className="footer_content">
          <div>
            Proporcionado por&nbsp;
            <a
              className="footer_link"
              href="https://github.com/mathdroid/covid-19-api"
              target="_blank"
            >
              COVID-19 API
            </a>
          </div>
          <div className="footer_divider">|</div>
          <div>
            Hecho por&nbsp;
            <a
              className="footer_link"
              href="https://www.linkedin.com/in/joseph-whacheng/"
              target="_blank"
            >
              Joseph Whacheng
            </a>
          </div>
          <div className="footer_divider">|</div>
          <div>
            Repositorio&nbsp;
            <a
              className="footer_link"
              href="#"
              target="_blank"
            >
              GitHub
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
